import {defineStore} from 'pinia'
import router from '@/router';

interface BodyState {
  class: string ,
  route: any
}

export const globalState = defineStore('body', {
  state: (): BodyState => ({
    class: '',
    route: router.currentRoute.value
  })
});