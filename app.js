const stories = [
    {
        id: 1,
        title: "Creation",
        preview: "In the beginning, God made the world!",
        content: "God spoke and light appeared! He made the stars, the trees, and the blue ocean..."
    },
    {
        id: 2,
        title: "Noah's Big Boat",
        preview: "The animals went in two by two.",
        content: "Noah built a giant ark. Rain fell, but God kept Noah and the animals safe!"
    }
];

const container = document.getElementById('story-container');
const modal = document.getElementById('story-modal');
const storyContent = document.getElementById('story-content');

// Load Stories
stories.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `<h3>${story.title}</h3><p>${story.preview}</p>`;
    card.onclick = () => openStory(story);
    container.appendChild(card);
});

function openStory(story) {
    storyContent.innerHTML = `<h2>${story.title}</h2><p>${story.content}</p>`;
    modal.classList.remove('hidden');
}

document.getElementById('close-btn').onclick = () => modal.classList.add('hidden');

// --- PWA Registration (The "Downloadable" Part) ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('App ready for offline use!'))
        .catch(err => console.log('Registration failed', err));
    });
}
