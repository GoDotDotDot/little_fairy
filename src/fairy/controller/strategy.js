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
  // 获得指定景点的攻略
  async getStrategyAction () {
    let get = this.get()
    let {addr_id} = get
    this.header('Access-Control-Allow-Origin', '*')
    if (!addr_id) {
      this.fail(100, `addr_id:${addr_id}`)
    }
    try {
      let data = await this.model('strategy').where({addr_id}).find()
      this.success({data})
    } catch (ex) {
      this.fail(500, ex)
    }
  }
  async postStrategyAction () {
    let form = this.post()

    let data = await this.model('strategy').select()
    this.success({data})
  }
}
