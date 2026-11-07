export const metadata = {"slug": "text-frequency", "title": "Text Frequency", "description": "Count the most frequent words in a passage."};
export const fields = [{"name": "text", "label": "Passage", "type": "textarea", "value": "code test code build test code"}];
export function compute(input){
  const freq={};for(const word of (input.text.toLowerCase().match(/[a-z0-9]+/g)||[]))freq[word]=(freq[word]||0)+1;return {ranking:Object.entries(freq).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).map(([word,count])=>({word,count}))}
}
