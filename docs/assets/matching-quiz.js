class MatchingQuiz {
  constructor(containerId, pairs) {
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    this.pairs = pairs;
    this.render();
  }

  shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  render() {
    const shuffledRight = this.shuffle(this.pairs.map(p => p.right));
    const grid = document.createElement("div");
    grid.className = "mq-grid";

    this.pairs.forEach((pair, i) => {
      const left = document.createElement("div");
      left.className = "mq-item";
      left.textContent = pair.left;

      const select = document.createElement("select");
      select.id = `${this.containerId}-select-${i}`;
      select.className = "mq-select";
      select.innerHTML =
        `<option value="">Select…</option>` +
        shuffledRight.map(r => `<option value="${r}">${r}</option>`).join("");

      grid.appendChild(left);
      grid.appendChild(select);
    });

    this.container.appendChild(grid);
  }

  check() {
    let correct = 0;
    this.pairs.forEach((pair, i) => {
      const val = document.getElementById(
        `${this.containerId}-select-${i}`
      ).value;
      if (val === pair.right) correct++;
    });

    if (correct === this.pairs.length) {
      const targets = document.querySelectorAll(
      `.post-quiz[data-quiz="${this.containerId}"]`
      );

      console.log("Reveal targets:", targets.length);

      targets.forEach(el => {
        el.classList.add("is-visible");
      });
    }

    return correct;
  }
}
