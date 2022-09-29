export default [{
  url: '/dashboard/fake_analysis_chart_data',
  method: 'post',
  response: (req) => {
    return {
      code: 200,
      data: {
        visitData: [
          {
            x: '2022-08-24',
            y: 7,
          },
          {
            x: '2022-08-25',
            y: 5,
          },
          {
            x: '2022-08-26',
            y: 4,
          },
          {
            x: '2022-08-27',
            y: 2,
          },
          {
            x: '2022-08-28',
            y: 4,
          },
          {
            x: '2022-08-29',
            y: 7,
          },
          {
            x: '2022-08-30',
            y: 5,
          },
          {
            x: '2022-08-31',
            y: 6,
          },
          {
            x: '2022-09-01',
            y: 5,
          },
          {
            x: '2022-09-02',
            y: 9,
          },
          {
            x: '2022-09-03',
            y: 6,
          },
          {
            x: '2022-09-04',
            y: 3,
          },
          {
            x: '2022-09-05',
            y: 1,
          },
          {
            x: '2022-09-06',
            y: 5,
          },
          {
            x: '2022-09-07',
            y: 3,
          },
          {
            x: '2022-09-08',
            y: 6,
          },
          {
            x: '2022-09-09',
            y: 5,
          },
        ],
        visitData2: [
          {
            x: '2022-08-24',
            y: 1,
          },
          {
            x: '2022-08-25',
            y: 6,
          },
          {
            x: '2022-08-26',
            y: 4,
          },
          {
            x: '2022-08-27',
            y: 8,
          },
          {
            x: '2022-08-28',
            y: 3,
          },
          {
            x: '2022-08-29',
            y: 7,
          },
          {
            x: '2022-08-30',
            y: 2,
          },
        ],
        salesData: [
          {
            x: '1月',
            y: 997,
          },
          {
            x: '2月',
            y: 625,
          },
          {
            x: '3月',
            y: 518,
          },
          {
            x: '4月',
            y: 234,
          },
          {
            x: '5月',
            y: 934,
          },
          {
            x: '6月',
            y: 689,
          },
          {
            x: '7月',
            y: 424,
          },
          {
            x: '8月',
            y: 1054,
          },
          {
            x: '9月',
            y: 885,
          },
          {
            x: '10月',
            y: 987,
          },
          {
            x: '11月',
            y: 1053,
          },
          {
            x: '12月',
            y: 434,
          },
        ],
        searchData: [
          {
            index: 1,
            keyword: '搜索关键词-0',
            count: 280,
            range: 37,
            status: 1,
          },
          {
            index: 2,
            keyword: '搜索关键词-1',
            count: 562,
            range: 59,
            status: 1,
          },
          {
            index: 3,
            keyword: '搜索关键词-2',
            count: 279,
            range: 46,
            status: 1,
          },
          {
            index: 4,
            keyword: '搜索关键词-3',
            count: 586,
            range: 94,
            status: 1,
          },
          {
            index: 5,
            keyword: '搜索关键词-4',
            count: 977,
            range: 10,
            status: 0,
          },
          {
            index: 6,
            keyword: '搜索关键词-5',
            count: 192,
            range: 68,
            status: 1,
          },
          {
            index: 7,
            keyword: '搜索关键词-6',
            count: 746,
            range: 39,
            status: 0,
          },
          {
            index: 8,
            keyword: '搜索关键词-7',
            count: 461,
            range: 1,
            status: 1,
          },
          {
            index: 9,
            keyword: '搜索关键词-8',
            count: 369,
            range: 1,
            status: 0,
          },
          {
            index: 10,
            keyword: '搜索关键词-9',
            count: 505,
            range: 54,
            status: 0,
          },
          {
            index: 11,
            keyword: '搜索关键词-10',
            count: 930,
            range: 56,
            status: 0,
          },
          {
            index: 12,
            keyword: '搜索关键词-11',
            count: 310,
            range: 11,
            status: 1,
          },
          {
            index: 13,
            keyword: '搜索关键词-12',
            count: 983,
            range: 54,
            status: 1,
          },
          {
            index: 14,
            keyword: '搜索关键词-13',
            count: 756,
            range: 50,
            status: 1,
          },
          {
            index: 15,
            keyword: '搜索关键词-14',
            count: 607,
            range: 98,
            status: 0,
          },
          {
            index: 16,
            keyword: '搜索关键词-15',
            count: 145,
            range: 17,
            status: 0,
          },
          {
            index: 17,
            keyword: '搜索关键词-16',
            count: 953,
            range: 18,
            status: 0,
          },
          {
            index: 18,
            keyword: '搜索关键词-17',
            count: 811,
            range: 33,
            status: 1,
          },
          {
            index: 19,
            keyword: '搜索关键词-18',
            count: 424,
            range: 46,
            status: 0,
          },
          {
            index: 20,
            keyword: '搜索关键词-19',
            count: 53,
            range: 25,
            status: 1,
          },
          {
            index: 21,
            keyword: '搜索关键词-20',
            count: 478,
            range: 23,
            status: 0,
          },
          {
            index: 22,
            keyword: '搜索关键词-21',
            count: 271,
            range: 16,
            status: 0,
          },
          {
            index: 23,
            keyword: '搜索关键词-22',
            count: 72,
            range: 49,
            status: 1,
          },
          {
            index: 24,
            keyword: '搜索关键词-23',
            count: 127,
            range: 29,
            status: 1,
          },
          {
            index: 25,
            keyword: '搜索关键词-24',
            count: 350,
            range: 97,
            status: 0,
          },
          {
            index: 26,
            keyword: '搜索关键词-25',
            count: 702,
            range: 9,
            status: 0,
          },
          {
            index: 27,
            keyword: '搜索关键词-26',
            count: 579,
            range: 40,
            status: 1,
          },
          {
            index: 28,
            keyword: '搜索关键词-27',
            count: 313,
            range: 32,
            status: 0,
          },
          {
            index: 29,
            keyword: '搜索关键词-28',
            count: 439,
            range: 27,
            status: 1,
          },
          {
            index: 30,
            keyword: '搜索关键词-29',
            count: 324,
            range: 94,
            status: 1,
          },
          {
            index: 31,
            keyword: '搜索关键词-30',
            count: 394,
            range: 47,
            status: 0,
          },
          {
            index: 32,
            keyword: '搜索关键词-31',
            count: 252,
            range: 1,
            status: 1,
          },
          {
            index: 33,
            keyword: '搜索关键词-32',
            count: 422,
            range: 74,
            status: 0,
          },
          {
            index: 34,
            keyword: '搜索关键词-33',
            count: 606,
            range: 9,
            status: 1,
          },
          {
            index: 35,
            keyword: '搜索关键词-34',
            count: 332,
            range: 19,
            status: 1,
          },
          {
            index: 36,
            keyword: '搜索关键词-35',
            count: 477,
            range: 12,
            status: 0,
          },
          {
            index: 37,
            keyword: '搜索关键词-36',
            count: 789,
            range: 15,
            status: 0,
          },
          {
            index: 38,
            keyword: '搜索关键词-37',
            count: 559,
            range: 88,
            status: 0,
          },
          {
            index: 39,
            keyword: '搜索关键词-38',
            count: 592,
            range: 11,
            status: 1,
          },
          {
            index: 40,
            keyword: '搜索关键词-39',
            count: 163,
            range: 79,
            status: 0,
          },
          {
            index: 41,
            keyword: '搜索关键词-40',
            count: 815,
            range: 44,
            status: 1,
          },
          {
            index: 42,
            keyword: '搜索关键词-41',
            count: 564,
            range: 90,
            status: 1,
          },
          {
            index: 43,
            keyword: '搜索关键词-42',
            count: 530,
            range: 81,
            status: 1,
          },
          {
            index: 44,
            keyword: '搜索关键词-43',
            count: 265,
            range: 9,
            status: 0,
          },
          {
            index: 45,
            keyword: '搜索关键词-44',
            count: 903,
            range: 72,
            status: 0,
          },
          {
            index: 46,
            keyword: '搜索关键词-45',
            count: 376,
            range: 65,
            status: 1,
          },
          {
            index: 47,
            keyword: '搜索关键词-46',
            count: 228,
            range: 54,
            status: 1,
          },
          {
            index: 48,
            keyword: '搜索关键词-47',
            count: 11,
            range: 16,
            status: 0,
          },
          {
            index: 49,
            keyword: '搜索关键词-48',
            count: 774,
            range: 67,
            status: 0,
          },
          {
            index: 50,
            keyword: '搜索关键词-49',
            count: 238,
            range: 0,
            status: 0,
          },
        ],
        offlineData: [
          {
            name: 'Stores 0',
            cvr: 0.9,
          },
          {
            name: 'Stores 1',
            cvr: 0.1,
          },
          {
            name: 'Stores 2',
            cvr: 0.8,
          },
          {
            name: 'Stores 3',
            cvr: 0.8,
          },
          {
            name: 'Stores 4',
            cvr: 0.1,
          },
          {
            name: 'Stores 5',
            cvr: 0.7,
          },
          {
            name: 'Stores 6',
            cvr: 0.4,
          },
          {
            name: 'Stores 7',
            cvr: 0.7,
          },
          {
            name: 'Stores 8',
            cvr: 0.1,
          },
          {
            name: 'Stores 9',
            cvr: 0.8,
          },
        ],
        offlineChartData: [
          {
            date: '07:53',
            type: '客流量',
            value: 90,
          },
          {
            date: '07:53',
            type: '支付笔数',
            value: 44,
          },
          {
            date: '08:23',
            type: '客流量',
            value: 73,
          },
          {
            date: '08:23',
            type: '支付笔数',
            value: 51,
          },
          {
            date: '08:53',
            type: '客流量',
            value: 91,
          },
          {
            date: '08:53',
            type: '支付笔数',
            value: 92,
          },
          {
            date: '09:23',
            type: '客流量',
            value: 87,
          },
          {
            date: '09:23',
            type: '支付笔数',
            value: 69,
          },
          {
            date: '09:53',
            type: '客流量',
            value: 45,
          },
          {
            date: '09:53',
            type: '支付笔数',
            value: 75,
          },
          {
            date: '10:23',
            type: '客流量',
            value: 23,
          },
          {
            date: '10:23',
            type: '支付笔数',
            value: 82,
          },
          {
            date: '10:53',
            type: '客流量',
            value: 89,
          },
          {
            date: '10:53',
            type: '支付笔数',
            value: 106,
          },
          {
            date: '11:23',
            type: '客流量',
            value: 65,
          },
          {
            date: '11:23',
            type: '支付笔数',
            value: 106,
          },
          {
            date: '11:53',
            type: '客流量',
            value: 12,
          },
          {
            date: '11:53',
            type: '支付笔数',
            value: 38,
          },
          {
            date: '12:23',
            type: '客流量',
            value: 84,
          },
          {
            date: '12:23',
            type: '支付笔数',
            value: 71,
          },
          {
            date: '12:53',
            type: '客流量',
            value: 60,
          },
          {
            date: '12:53',
            type: '支付笔数',
            value: 54,
          },
          {
            date: '13:23',
            type: '客流量',
            value: 55,
          },
          {
            date: '13:23',
            type: '支付笔数',
            value: 90,
          },
          {
            date: '13:53',
            type: '客流量',
            value: 37,
          },
          {
            date: '13:53',
            type: '支付笔数',
            value: 89,
          },
          {
            date: '14:23',
            type: '客流量',
            value: 85,
          },
          {
            date: '14:23',
            type: '支付笔数',
            value: 102,
          },
          {
            date: '14:53',
            type: '客流量',
            value: 80,
          },
          {
            date: '14:53',
            type: '支付笔数',
            value: 57,
          },
          {
            date: '15:23',
            type: '客流量',
            value: 53,
          },
          {
            date: '15:23',
            type: '支付笔数',
            value: 41,
          },
          {
            date: '15:53',
            type: '客流量',
            value: 95,
          },
          {
            date: '15:53',
            type: '支付笔数',
            value: 98,
          },
          {
            date: '16:23',
            type: '客流量',
            value: 21,
          },
          {
            date: '16:23',
            type: '支付笔数',
            value: 67,
          },
          {
            date: '16:53',
            type: '客流量',
            value: 42,
          },
          {
            date: '16:53',
            type: '支付笔数',
            value: 65,
          },
          {
            date: '17:23',
            type: '客流量',
            value: 65,
          },
          {
            date: '17:23',
            type: '支付笔数',
            value: 106,
          },
        ],
        salesTypeData: [
          {
            x: '家用电器',
            y: 4544,
          },
          {
            x: '食用酒水',
            y: 3321,
          },
          {
            x: '个护健康',
            y: 3113,
          },
          {
            x: '服饰箱包',
            y: 2341,
          },
          {
            x: '母婴产品',
            y: 1231,
          },
          {
            x: '其他',
            y: 1231,
          },
        ],
        salesTypeDataOnline: [
          {
            x: '家用电器',
            y: 244,
          },
          {
            x: '食用酒水',
            y: 321,
          },
          {
            x: '个护健康',
            y: 311,
          },
          {
            x: '服饰箱包',
            y: 41,
          },
          {
            x: '母婴产品',
            y: 121,
          },
          {
            x: '其他',
            y: 111,
          },
        ],
        salesTypeDataOffline: [
          {
            x: '家用电器',
            y: 99,
          },
          {
            x: '食用酒水',
            y: 188,
          },
          {
            x: '个护健康',
            y: 344,
          },
          {
            x: '服饰箱包',
            y: 255,
          },
          {
            x: '其他',
            y: 65,
          },
        ],
        radarData: [
          {
            name: '个人',
            label: '引用',
            value: 10,
          },
          {
            name: '个人',
            label: '口碑',
            value: 8,
          },
          {
            name: '个人',
            label: '产量',
            value: 4,
          },
          {
            name: '个人',
            label: '贡献',
            value: 5,
          },
          {
            name: '个人',
            label: '热度',
            value: 7,
          },
          {
            name: '团队',
            label: '引用',
            value: 3,
          },
          {
            name: '团队',
            label: '口碑',
            value: 9,
          },
          {
            name: '团队',
            label: '产量',
            value: 6,
          },
          {
            name: '团队',
            label: '贡献',
            value: 3,
          },
          {
            name: '团队',
            label: '热度',
            value: 1,
          },
          {
            name: '部门',
            label: '引用',
            value: 4,
          },
          {
            name: '部门',
            label: '口碑',
            value: 1,
          },
          {
            name: '部门',
            label: '产量',
            value: 6,
          },
          {
            name: '部门',
            label: '贡献',
            value: 5,
          },
          {
            name: '部门',
            label: '热度',
            value: 7,
          },
        ],
      },
    }
  }
}]
