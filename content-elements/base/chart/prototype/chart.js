import { ChartConfig, ChartUrlProvider } from '@bsi-cx/chart';
import ChartConfigColor from '@bsi-cx/chart/src/config/color';
import Alpine from '@alpinejs/csp';
import 'chart.js/auto';

/**
 * @type {{border: ChartConfigColor, background: ChartConfigColor}[]}
 */

Alpine.data('chartElement', () => ({
  chart: null,
  config: null,

  initChart() {
    this.chart = this.$el;

    const borderColors = this.chart.dataset.bordercolors.split(",");
    const backgroundColors = this.chart.dataset.backgroundcolors.split(",");
    for(let i = 0; i < Math.min(borderColors.length, backgroundColors.length); i++) {
      colors[i] = ChartConfigColor.of(borderColors[i], backgroundColors[i]);
    }

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
    //ChartConfigColor.of(bsiProperty('chartBorderColor1', '#116985ff'),bsiProperty('chartBackgroundColor1', '#11698566')),
    //ChartConfigColor.of(bsiProperty('chartBorderColor2', '#27aab0ff'),bsiProperty('chartBackgroundColor2', '#27aab066')),
    //ChartConfigColor.of(bsiProperty('chartBorderColor3', '#94e7a8ff'),bsiProperty('chartBackgroundColor3', '#94e7a866')),
    //ChartConfigColor.of(bsiProperty('chartBorderColor4', '#c7f296ff'),bsiProperty('chartBackgroundColor4', '#c7f29666'))
];
