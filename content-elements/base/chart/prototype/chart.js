import Alpine from 'alpinejs';
import 'chart.js/auto';
import {ChartConfig, ChartUrlProvider} from '@bsi-cx/chart';
import ChartConfigColor from '@bsi-cx/chart/src/config/color';

/**
 * @type {{border: ChartConfigColor, background: ChartConfigColor}[]}
 */

Alpine.data('chartElement', () => ({
  chart: null,
  config: null,

  initChart() {
    this.chart = this.$el;

    this.config = new ChartConfig()
      .withConfigPostProcessor(this.chartPreprocessor)
      .withColors(...colors);

    new ChartUrlProvider(this.chart, this.config).render();
  },

  chartPreprocessor(config) {
    if (config.type === 'pie') {
      config.data.datasets.forEach(dataset => {
        dataset.borderColor = '#ffffff';
        dataset.backgroundColor = colors.map(color => color.background.getHex()).slice(0, dataset.data.length);
      });
    }

    return Object.assign(config, {
      options: {
        aspectRatio: 1
      }
    });
  },
}))

/*const colors = [
  ChartConfigColor.of('#116985ff','#11698566'),
  ChartConfigColor.of( '#27aab0ff','#27aab066'),
  ChartConfigColor.of( '#94e7a8ff', '#94e7a866'),
  ChartConfigColor.of( '#c7f296ff','#c7f29666')
]*/
const colors = [
    ChartConfigColor.of(window.properties?.chartBorderColor1 ?? '#116985ff',window.properties?.chartBackgroundColor1 ?? '#11698566'),
    ChartConfigColor.of(window.properties?.chartBorderColor2 ?? '#27aab0ff',window.properties?.chartBackgroundColor2 ?? '#27aab066'),
    ChartConfigColor.of(window.properties?.chartBorderColor3 ?? '#94e7a8ff',window.properties?.chartBackgroundColor3 ?? '#94e7a866'),
    ChartConfigColor.of(window.properties?.chartBorderColor4 ?? '#c7f296ff',window.properties?.chartBackgroundColor4 ?? '#c7f29666')
];