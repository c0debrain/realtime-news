import base from './base'
import { Coverages } from '../api/collections'

export default {
  extends: base,

  data () {
    return {
      coverages: [],
    }
  },

  meteor: {
    $subscribe: {
      'coverages': [],
    },

    coverages () {
      return Coverages.find({})
    },
  },
}
