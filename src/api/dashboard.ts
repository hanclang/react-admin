import request from '@/utils/request'

export function getChartData() {
    return request({
        url: 'dashboard/fake_analysis_chart_data',
        method: 'post'
    })
}