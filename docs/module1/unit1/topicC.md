# Basic Sgaw Karen 04 - Days of the week

<iframe width="560" height="315"
src="https://www.youtube.com/embed/rudMS3kHog0">
</iframe>

## Video Comprehension: Matching Quiz

<div class="quiz-box">
<div class="quiz-container" id="quiz"></div>
<button onclick="checkAnswers()">Check Answers</button>
<div class="result" id="result"></div>
</div>

<div id="post-quiz" class="display-none">
<h2> Thats right! Here is a summary of the video: </h2>
There are two main ways to say days of the week in Sgaw Karen, the first being the more proper but less practical and less used way:
<table>
  <thead>
    <tr>
      <th>English</th>
      <th>Sgaw Karen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sunday</td>
      <td>မုၢ်ဒဲး</td>
    </tr>
    <tr>
      <td>Monday</td>
      <td>မုၢ်ဆၣ်</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>မုၢ်ယူာ်</td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td>မုၢ်ပျဲၤ</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>မုၢ်လ့ဧိၤ</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>မုၢ်ဖီဖး</td>
    </tr>
    <tr>
      <td>Saturday</td>
      <td>မုၢ်ဘူၣ်</td>
    </tr>
  </tbody>
</table>

Then, the more practical and common way:
<table>
  <thead>
    <tr>
      <th>English</th>
      <th>Sgaw Karen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sunday</td>
      <td>မုၢ်နွံနံၤ / မုၢ်အိၣ်ဘှံးနံၤ</td>
    </tr>
    <tr>
      <td>Monday</td>
      <td>မုၢ်တနံၤ</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>မုၢ်ခံနံၤ</td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td>မုၢ်သၢနံၤ</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>မုၢ်လွံၢ်နံၤ</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>မုၢ်ယဲၢ်နံၤ</td>
    </tr>
    <tr>
      <td>Saturday</td>
      <td>မုၢ်ဃုနံၤ</td>
    </tr>
  </tbody>
</table>


Additional vocabulary + relative time:
<table>
  <thead>
    <tr>
      <th>English</th>
      <th>Sgaw Karen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Day</td>
      <td>မုၢ်နံၤ / နံၤ</td>
    </tr>
    <tr>
      <td>Yesterday</td>
      <td>မဟါတနံၤ / မဟါကၢာ်</td>
    </tr>
    <tr>
      <td>Today</td>
      <td>တနံၤအံၤ</td>
    </tr>
    <tr>
      <td>Tomorrow</td>
      <td>ခဲမုၢ်ဆ့ၣ်</td>
    </tr>
    <tr>
      <td>The day after tomorrow</td>
      <td>ခဲတဆ့ၣ်</td>
    </tr>
  </tbody>
</table>

</div>

<script>
  const pairs = [
    { left: "Friday", right: "မုၢ်ယဲၢ်နံၤ" },
    { left: "Tomorrow", right: "ခဲမုၢ်ဆ့ၣ်" },
    { left: "Yesterday", right: "မဟါကၢာ် / မဟါတနံၤ" },
    { left: "Sunday", right: "မုၢ်နွံနံၤ / မုၢ်အိၣ်ဘှံးနံၤ" }
  ];

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  const quiz = document.getElementById("quiz");
  const shuffledRight = shuffle([...pairs.map(p => p.right)]);
  const leftCol = document.createElement("div");
  const rightCol = document.createElement("div");
  leftCol.className = rightCol.className = "column";
  pairs.forEach((pair, i) => {
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = pair.left;

    const select = document.createElement("select");
    select.id = `select-${i}`;
    select.className = "item"
    select.innerHTML = `<option value="">Select...</option>` +
      shuffledRight.map(r => `<option value="${r}">${r}</option>`).join("");

    leftCol.appendChild(item);
    rightCol.appendChild(select);
  });

  quiz.appendChild(leftCol);
  quiz.appendChild(rightCol);

  function checkAnswers() {
    let correct = 0;
    pairs.forEach((pair, i) => {
      const selected = document.getElementById(`select-${i}`).value;
      if (selected === pair.right) correct++;
    });
    const result = document.getElementById("result");
    result.textContent = `You got ${correct} out of ${pairs.length} correct.`;
    result.style.color = correct === pairs.length ? "#1db954" : "#ff4c4c";
    if (correct === pairs.length) 
    {
        document.getElementById("post-quiz").classList.toggle("display-none")
    }
  }
</script>
