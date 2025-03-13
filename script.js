document.getElementById('entryDate').valueAsDate = new Date();
        document.getElementById('entryDate').addEventListener('change', loadEntry);

        function saveEntry() {
            let date = document.getElementById('entryDate').value;
            let text = document.getElementById('diaryEntry').value;

            if (text.trim() === '') {
                showModal();
                return;
            }

            localStorage.setItem(date, text);
            document.getElementById('status').innerText = "✅ Saved Successfully!";
        }

        function loadEntry() {
            let date = document.getElementById('entryDate').value;
            let entry = localStorage.getItem(date) || "";
            document.getElementById('diaryEntry').value = entry;
            document.getElementById('status').innerText = "";
            predictMood();
        }

        function predictMood() {
            let text = document.getElementById('diaryEntry').value.toLowerCase();
            let moodText = "😃 Neutral";

            if (text.includes("happy") || text.includes("love")) {
                moodText = "😊 Happy";
            } else if (text.includes("sad") || text.includes("lonely")) {
                moodText = "😢 Sad";
            } else if (text.includes("angry")) {
                moodText = "😡 Angry";
            } else if (text.includes("tired")) {
                moodText = "😴 Tired";
            }

            document.getElementById('mood').innerText = moodText;
        }

        function showModal() {
            document.getElementById('myModal').style.display = "block";
        }

        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }

        window.onload = loadEntry;