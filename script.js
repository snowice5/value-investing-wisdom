const quoteSets = {
  en: [
    {
      text: "Price is what you pay. Value is what you get.",
      source: "Warren Buffett",
    },
    {
      text: "The stock market is designed to transfer money from the active to the patient.",
      source: "Warren Buffett",
    },
    {
      text: "Risk comes from not knowing what you're doing.",
      source: "Warren Buffett",
    },
    {
      text: "Be fearful when others are greedy and greedy when others are fearful.",
      source: "Warren Buffett",
    },
    {
      text: "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
      source: "Warren Buffett",
    },
    {
      text: "The margin of safety is always dependent on the price paid.",
      source: "Benjamin Graham",
    },
    {
      text: "In the short run, the market is a voting machine, but in the long run it is a weighing machine.",
      source: "Benjamin Graham",
    },
    {
      text: "The intelligent investor is a realist who sells to optimists and buys from pessimists.",
      source: "Benjamin Graham",
    },
    {
      text: "A great business at the right price can be worth a long wait.",
      source: "Value Investing Reminder",
    },
    {
      text: "Time is the friend of the wonderful business.",
      source: "Warren Buffett",
    },
    {
      text: "The big money is not in the buying or selling, but in the waiting.",
      source: "Charlie Munger",
    },
    {
      text: "A falling market can be a sale rack for patient capital.",
      source: "Value Investing Reminder",
    },
    {
      text: "Cash and courage become valuable when prices stop making sense.",
      source: "Value Investing Reminder",
    },
    {
      text: "Volatility is the fee for owning tomorrow's value today.",
      source: "Value Investing Reminder",
    },
    {
      text: "When the crowd panics, the patient investor starts reading.",
      source: "Value Investing Reminder",
    },
    {
      text: "The best investors are disciplined when the market is emotional.",
      source: "Value Investing Reminder",
    },
  ],
  zh: [
    {
      text: "價格是你付出的，價值才是你得到的。",
      source: "華倫・巴菲特",
    },
    {
      text: "股市是把錢從急躁的人手中，轉到有耐心的人手中的地方。",
      source: "華倫・巴菲特",
    },
    {
      text: "風險來自於你不知道自己正在做什麼。",
      source: "華倫・巴菲特",
    },
    {
      text: "別人貪婪時要恐懼，別人恐懼時要貪婪。",
      source: "華倫・巴菲特",
    },
    {
      text: "用合理價格買進好公司，勝過用便宜價格買進普通公司。",
      source: "華倫・巴菲特",
    },
    {
      text: "安全邊際，永遠取決於你買進時付出的價格。",
      source: "班傑明・葛拉漢",
    },
    {
      text: "短期來看，市場是投票機；長期來看，市場是稱重機。",
      source: "班傑明・葛拉漢",
    },
    {
      text: "聰明的投資人，是賣給樂觀者、買自悲觀者的現實主義者。",
      source: "班傑明・葛拉漢",
    },
    {
      text: "好公司遇上好價格，值得用時間慢慢等。",
      source: "價值投資提醒",
    },
    {
      text: "時間，是好企業的朋友。",
      source: "華倫・巴菲特",
    },
    {
      text: "真正的大錢，不在買進或賣出，而在等待。",
      source: "查理・蒙格",
    },
    {
      text: "市場下跌，有時只是耐心資金的折扣季。",
      source: "價值投資提醒",
    },
    {
      text: "當價格失去理性，現金和勇氣就開始變珍貴。",
      source: "價值投資提醒",
    },
    {
      text: "波動，是今天擁有明日價值所付出的門票。",
      source: "價值投資提醒",
    },
    {
      text: "當群眾恐慌時，有耐心的人開始翻資料。",
      source: "價值投資提醒",
    },
    {
      text: "最好的投資人，是在市場情緒化時仍保持紀律的人。",
      source: "價值投資提醒",
    },
  ],
};

const pageLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
const quotes = quoteSets[pageLanguage];

const figureButton = document.querySelector("#figureButton");
const quoteCard = document.querySelector("#quoteCard");
const quoteText = document.querySelector("#quoteText");
const quoteSource = document.querySelector("#quoteSource");

let quoteQueue = [];
const moneySymbols = ["$", "$", "$", "$$", "$", "$$$"];

function shuffleQuoteQueue() {
  quoteQueue = quotes.map((_, index) => index);

  for (let index = quoteQueue.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [quoteQueue[index], quoteQueue[swapIndex]] = [quoteQueue[swapIndex], quoteQueue[index]];
  }
}

function getNextQuote() {
  if (quoteQueue.length === 0) {
    shuffleQuoteQueue();
  }

  return quoteQueue.pop();
}

function revealQuote() {
  const quote = quotes[getNextQuote()];

  quoteText.textContent = quote.text;
  quoteSource.textContent = quote.source;

  quoteCard.classList.remove("is-changing");
  figureButton.classList.remove("is-rocking");

  requestAnimationFrame(() => {
    quoteCard.classList.add("is-changing");
    figureButton.classList.add("is-rocking");
  });
}

function createMoneyRain() {
  const isCompact = window.matchMedia("(max-width: 760px)").matches;
  const dropCount = isCompact ? 24 : 42;

  for (let index = 0; index < dropCount; index += 1) {
    const symbol = document.createElement("span");
    const left = Math.round(Math.random() * 100);
    const rotation = Math.round((Math.random() - 0.5) * 60);
    const fallRotation = rotation + Math.round((Math.random() - 0.5) * 160);
    const size = isCompact
      ? (1.2 + Math.random() * 1.15).toFixed(2)
      : (0.78 + Math.random() * 0.95).toFixed(2);
    const delay = Math.round(Math.random() * 520);
    const duration = Math.round(1250 + Math.random() * 900);

    symbol.className = "money-rain";
    symbol.textContent = moneySymbols[Math.floor(Math.random() * moneySymbols.length)];
    symbol.style.setProperty("--money-left", `${left}%`);
    symbol.style.setProperty("--money-rotate", `${rotation}deg`);
    symbol.style.setProperty("--money-fall-rotate", `${fallRotation}deg`);
    symbol.style.setProperty("--money-size", `${size}rem`);
    symbol.style.setProperty("--money-opacity", isCompact ? "0.86" : "0.72");
    symbol.style.setProperty("--money-duration", `${duration}ms`);
    symbol.style.animationDelay = `${delay}ms`;

    document.body.append(symbol);
    symbol.addEventListener("animationend", () => symbol.remove(), { once: true });
  }
}

figureButton.addEventListener("click", () => {
  revealQuote();
  createMoneyRain();
});
