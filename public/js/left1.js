//初始化echarts实例对象
var left1Echarts =
    echarts.init(document.getElementById('left1'), 'dark');

//指定图标的配置项和数据
// ---------------左侧数据项-------------
var option = {
    //标签名称的设置
    title: {
        text: '交通工具流量',
        textStyle: {
            color: 'white',
        },
        left: 'left',
    },
    tooltip: {
        trigger: 'axis',
        //指示器修改
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#7171C6'
            }
        },
    },
    //图列
    legend: {
        data: ['小型车', '中型车', '大型车'],
        left: 'right'
    },
    //图例位置
    grid: {
        left: '4%',
        right: '6%',
        bottom: '4%',
        top: 50,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: [] //'3.20','3.21','3.22'
    }],
    yAxis: [{
        type: 'value',
        //y轴设置
        axisLabel: {
            show: true,
            color: 'white',
            fontSize: 12,
            formatter: function (value) {
                if (value >= 1000) {
                    value = value / 1000 + 'k';
                }
                return value;
            }
        },
        //y轴线的显示
        axisLine: {
            show: true
        },
        //x轴平行线线的显示
        splitLine: {
            show: true,
            lineStyle: {
                color: '#17273B',
                width: 1,
                type: 'solid'
            }
        }
    }],
    series: [
        {
            name: '小型车',
            type: 'line',
            smooth: true,
            data: [] //120, 132, 101, 134, 90, 230, 2100
        },
        {
            name: '中型车',
            type: 'line',
            smooth: true,
            data: [] //220, 182, 191, 234, 290, 330, 310
        },
        {
            name: '大型车',
            type: 'line',
            smooth: true,
            data: [] //150, 232, 201, 154, 190, 330, 410
        }
    ]
};
var chinaDayList = data.chinaDayList

//遍历每一天的数据
for (var day of chinaDayList) {
    option.xAxis[0].data.push(day.date)
    option.series[0].data.push(day.confirm)
    option.series[1].data.push(day.heal)
    option.series[2].data.push(day.dead)
}

//使用刚才指定的配置项和数据显示图标
left1Echarts.setOption(option);

window.addEventListener('resize', function () {
    left1Echarts.resize();
});
