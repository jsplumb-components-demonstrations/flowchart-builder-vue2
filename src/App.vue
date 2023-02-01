<template>
  <div id="app">
    <div id="flowchart">
      <jsplumb-flowchart-builder id="myFlowchart" url="copyright.json"></jsplumb-flowchart-builder>
    </div>
    <div id="rhs">
      <jsplumb-flowchart-builder-palette flowchartId="myFlowchart"></jsplumb-flowchart-builder-palette>
      <jsplumb-flowchart-builder-inspector flowchartId="myFlowchart"></jsplumb-flowchart-builder-inspector>
    </div>
  </div>
</template>

<style>
  @import "../node_modules/@jsplumb-components/flowchart/jsplumb.components.flowchart.css";
  @import "../node_modules/@jsplumb-components/flowchart/jsplumb.components.flowchart.theme.default.css";
  @import "../assets/css/app.css";
</style>

<script>

export default {
  name: 'app',
  methods:{ }
}
</script>

