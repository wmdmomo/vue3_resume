import service from './req'

export function getPlanList() {
    return service({ url: '', method: 'get' })
}

export function addPlan(data) {
    return service({ url: '/plan', method: 'post', data })
}

export function deletePlan() {
    return service({ url: '/plan', method: 'delete', params: { id } })
}
