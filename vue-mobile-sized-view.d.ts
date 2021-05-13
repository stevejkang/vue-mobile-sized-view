import Vue, { PluginFunction, VueConstructor } from 'vue';

declare const VueMobileSizedView: VueConstructor<Vue> & { install: PluginFunction<any>; };
export default VueMobileSizedView;
