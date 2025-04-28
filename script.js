function startGame(game) {
    document.querySelector('main').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    if (game === 'ronaldo') {
        startRonaldoGame();
    } else if (game === 'pudding') {
        startPuddingClicker();
    } else if (game === 'lifetime') {
        startLifetimeGame();
    }
}

function goHome() {
    document.querySelector('main').classList.remove('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('game-container').innerHTML = '';
}

// Ronaldo Game and Pudding Clicker (already defined above)

function startLifetimeGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>What Happens While You're Here?</h2>
        <div id="lifetime-stats" class="stats-grid"></div>
    `;

    const stats = [
        { label: "Babies born", ratePerSecond: 4.3 },
        { label: "People who died", ratePerSecond: 1.8 },
        { label: "Money earned by Messi ($)", ratePerSecond: 5 },
        { label: "Trees planted", ratePerSecond: 1 },
        { label: "Trees cut down", ratePerSecond: 2 },
        { label: "Cups of coffee consumed", ratePerSecond: 300 },
        { label: "Liters of water consumed", ratePerSecond: 1000 },
        { label: "Emails sent", ratePerSecond: 3000 },
        { label: "Google searches", ratePerSecond: 40000 },
        { label: "Tons of CO2 emitted", ratePerSecond: 1000 },
        { label: "Smartphones sold", ratePerSecond: 10 },
        { label: "Plastic bottles produced", ratePerSecond: 1500 },
        { label: "Books sold", ratePerSecond: 50 },
        { label: "Heartbeats worldwide", ratePerSecond: 70000000 },
        { label: "Lightning strikes", ratePerSecond: 100 },
        { label: "Kilometers traveled by all planes", ratePerSecond: 20000 },
        { label: "Tons of food wasted", ratePerSecond: 500 },
        { label: "Tons of food consumed", ratePerSecond: 800 },
        { label: "Tons of trash produced", ratePerSecond: 600 },
        { label: "Solar panels installed", ratePerSecond: 0.5 },
        { label: "Cars produced", ratePerSecond: 2 },
        { label: "Bicycles sold", ratePerSecond: 5 },
        { label: "Bees born", ratePerSecond: 10000 },
        { label: "Volcano eruptions", ratePerSecond: 0.0001 },
        { label: "Earthquakes (small)", ratePerSecond: 0.02 },
        { label: "Hours spent on Netflix", ratePerSecond: 10000 },
        { label: "Tons of ice melted", ratePerSecond: 1500 },
        { label: "Tweets posted", ratePerSecond: 7000 },
        { label: "Instagram posts uploaded", ratePerSecond: 5000 },
        { label: "Kilometers driven by all cars", ratePerSecond: 100000 },
        { label: "Kilometers walked by humans", ratePerSecond: 80000 },
        { label: "Liters of beer drunk", ratePerSecond: 120 },
        { label: "Liters of wine drunk", ratePerSecond: 30 },
        { label: "Dogs adopted", ratePerSecond: 0.1 },
        { label: "Cats adopted", ratePerSecond: 0.15 },
        { label: "Dollars donated to charities", ratePerSecond: 200 },
        { label: "People falling in love", ratePerSecond: 2 },
        { label: "Marriages happening", ratePerSecond: 0.5 },
        { label: "Breakups happening", ratePerSecond: 0.7 },
        { label: "Accidents happening", ratePerSecond: 1 },
        { label: "Books read", ratePerSecond: 80 },
        { label: "Laughter worldwide", ratePerSecond: 10000 },
        { label: "Hugs shared", ratePerSecond: 5000 },
        { label: "Songs played on Spotify", ratePerSecond: 10000 },
        { label: "New apps downloaded", ratePerSecond: 3000 },
        { label: "Dollars spent online", ratePerSecond: 40000 },
        { label: "Shoes sold", ratePerSecond: 200 },
        { label: "Photos taken", ratePerSecond: 6000 },
    ];

    const grid = document.getElementById('lifetime-stats');

    stats.forEach((stat, index) => {
        const el = document.createElement('div');
        el.className = 'stat-box';
        el.id = `stat-${index}`;
        el.innerHTML = `<h4>${stat.label}</h4><p>0</p>`;
        grid.appendChild(el);
        stat.value = 0;
    });

    let startTime = Date.now();

    setInterval(() => {
        const now = Date.now();
        const secondsPassed = (now - startTime) / 1000;
        stats.forEach((stat, index) => {
            const value = Math.floor(stat.ratePerSecond * secondsPassed);
            document.querySelector(`#stat-${index} p`).innerText = value.toLocaleString();
        });
    }, 500);
}
