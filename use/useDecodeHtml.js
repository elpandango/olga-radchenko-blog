export function useDecodeHtmlEntities(encodedString) {
    const tempValue = encodedString.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

    return tempValue.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}