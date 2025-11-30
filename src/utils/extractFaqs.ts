export function extractFaqs(html: string) {
  const regex = /<details>\s*<summary>(.*?)<\/summary>(.*?)<\/details>/gs;
  const faqs: { question: string; answer: string }[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].replace(/<[^>]+>/g, "").trim()
    });
  }
  return faqs;
}
