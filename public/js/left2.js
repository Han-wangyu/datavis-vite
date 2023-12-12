//初始化echarts实例对象
var left2Echarts =
    echarts.init(document.getElementById('left2'), 'dark');

const datas = [
    { name: "吴江南", value: "447.9" },
    { name: "阳澄湖", value: "312.5" },
    { name: "太仓东", value: "269.7" },
    { name: "黎里", value: "241.5" },
]
const myColor = ["#51FC4E", "#4C5FF5", "#FFE660", "#79F1FF"].reverse();
const xData = datas.map((item) => item.name);
const yData = datas.map((item) => item.value);
const max = Math.ceil(Math.max(...yData) * 1.2);
const maxData = [max, max, max, max, max];


//指定图标的配置项和数据
// ---------------左侧数据项-------------
var option = {
    title: {
        text: '收费站收费排行',
        textStyle: {
            color: 'white',
        },
        left: 'left',
    },
    // backgroundColor: '#0F1F45',
    grid: {
        left: "15%",
        right: "0%",
        bottom: "5%",
        top: "10%",
        containLabel: false,
    },
    xAxis: [
        {
            show: false,
        },
        {
            show: false,
        },
    ],
    yAxis: [
        {
            show: false,
            inverse: true,
            data: yData,
        },
        {
            show: true,
            data: yData,
            offset: -45,
            position: "right",
            axisLabel: {
                show: false,
                // lineHeight: 0,
                // verticalAlign: "bottom",
                // fontSize: 15,
                // color: "#4bf3f9",
                // formatter: "{value}亿",
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: "进度",
            show: true,
            type: "bar",
            barGap: "-100%",
            xAxisIndex: 1,
            barWidth: 4,
            itemStyle: {
                borderRadius: 4,
                color: (params) => {
                    var num = myColor.length;
                    return {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#0F1F45",
                            },
                            {
                                offset: 1,
                                color: myColor[params.dataIndex % num],
                            },
                        ],
                    };
                },
            },
            label: {
                show: false,
            },
            // max: 0,
            labelLine: {
                show: false,
            },
            z: 2,
            data: yData,
            animationDelay: 1000,
            animationDuration: 1000
        },
        {
            name: "外圆",
            type: "scatter",
            emphasis: {
                scale: false,
            },
            xAxisIndex: 1,
            symbolSize: 10,
            itemStyle: {
                color: (params) => {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num];
                },
                shadowColor: "rgba(255, 255, 255, 0.5)",
                shadowBlur: 5,
                borderWidth: 1,
                opacity: 1,
            },
            label: {
                show: true,
                verticalAlign: "bottom",
                lineHeight: 38,
                formatter: function (data) {
                    return yData[data.dataIndex] + "万";
                },
                fontSize: 20,
                color: "#4bf3f9",
            },
            z: 2,
            data: yData,
            animationDelay: 1700,
            animationDuration: 1000
        },
        {
            name: "年份",
            z: 1,
            show: true,
            type: "bar",
            xAxisIndex: 1,
            barGap: "-100%",
            barWidth: 4,
            itemStyle: {
                borderRadius: 4,
                color: "rgba(13, 55, 78, 1)",
            },
            label: {
                show: true,
                verticalAlign: "middle",
                position: "left",
                fontSize: 14,
                color: "#fff",
                formatter: function (data) {
                    return xData[data.dataIndex] + "：";
                },
            },
            data: maxData,
        },
    ],
};
//使用刚才指定的配置项和数据显示图标
left2Echarts.setOption(option);

window.addEventListener('resize', function () {
    left2Echarts.resize();
});
