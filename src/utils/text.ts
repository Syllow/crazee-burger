export default function formatText(text: string): string {
  let newText = text;
  if (text.length >= 20) newText = text.substring(0, 20) + '...';
  return newText;
}
