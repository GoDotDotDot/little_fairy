'use strict'

import Base from './base.js'

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction () {
    // auto render template file index_index.html
    return this.display()
  }
  async get_strategyAction () {
    let data = await this.model('strategy').select()
    this.success({data})
  }
}
