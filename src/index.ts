let isCompleteMode = false;

function isComplete() {
    isCompleteMode = !isCompleteMode;

    loadPartial();
}

async function loadPartial() {
    try {
        // Fetch the content of the partial
        const response = await fetch('/path/to/completed');
        const partialContent = await response.text();

        const rootElement = document.getElementById("completed");
        const completedBtn = document.getElementById("completedBtn");
        // Inject the partial content into the root element
        if (rootElement && completedBtn) {
            rootElement.innerHTML = partialContent;

            // Toggle the visibility
            if (isCompleteMode) {
                rootElement.style.display = "block";
                completedBtn.style.background = "#86e7f87a";
            } else {
                rootElement.style.display = "none";
                completedBtn.style.background = "none";
            }

        }

    } catch (error) {
        console.error('Error loading partial:', error);
    }
}

