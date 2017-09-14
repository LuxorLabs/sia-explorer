import { observable } from 'mobx'

export class MainStore {
  @observable selectedHash = ''
  @observable selectedHashData = {}
  @observable loading = false
}
