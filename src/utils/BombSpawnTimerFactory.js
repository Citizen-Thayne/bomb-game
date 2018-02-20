import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable';

const INITIAL_INTERVAL = 5000
const TIMER_ACCELERATION = 100
const TIMER_LOWER_LIMIT = 500

const BombSpawnTimerFactory = () => {
  const IntervalObservable  = Observable.create((observer) => {
    const wait = (delay) => {
      setTimeout(() => {
        let nextDelay = delay - TIMER_ACCELERATION
        nextDelay = nextDelay < TIMER_LOWER_LIMIT ? TIMER_LOWER_LIMIT : nextDelay
        observer.next(nextDelay)
        wait(nextDelay)
      }, delay)
    }
    observer.next(INITIAL_INTERVAL)
    wait(INITIAL_INTERVAL)
  })
  return IntervalObservable
}

export default BombSpawnTimerFactory
