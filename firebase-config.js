<!-- Firebase SDK -->
<script type="module">
  // Import Firebase SDK functions
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDcEEmCuq6aZd1d2VMukauxdvVeH1HEmDo",
    authDomain: "exambuddy-1345s.firebaseapp.com",
    projectId: "exambuddy-1345s",
    storageBucket: "exambuddy-1345s.firebasestorage.app",
    messagingSenderId: "475490696319",
    appId: "1:475490696319:web:beda1788d8c755ed00934a",
    measurementId: "G-8JRV3L2LXQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  console.log("✅ Firebase Connected!");
</script>
