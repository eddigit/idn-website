import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ivory:'#f4efe6', stone:'#e5d8c5', green:'#0d3429', greenSoft:'#173f33', champagne:'#c4a46b', ink:'#1f261f' }, fontFamily: { serif:['Georgia','serif'], sans:['Inter','system-ui','sans-serif'] }, boxShadow:{ premium:'0 28px 70px rgba(20,35,28,.12)' } } }, plugins: [] };
export default config;
