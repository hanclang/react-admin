import request from '@/utils/request'

export function getChartData(): Promise<BaseResponse> {
    return request({
        url: 'dashboard/fake_analysis_chart_data',
        method: 'post'
    })
}