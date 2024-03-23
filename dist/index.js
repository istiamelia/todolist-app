"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let isCompleteMode = false;
function isComplete() {
    isCompleteMode = !isCompleteMode;
    loadPartial();
}
function loadPartial() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch the content of the partial
            const response = yield fetch('/path/to/completed');
            // saving the promise response into string using method text()
            const partialContent = yield response.text();
            // acessing HTML element through DOM
            const rootElement = document.getElementById("completed");
            const completedBtn = document.getElementById("completedBtn");
            // Inject the partial content into the root element
            if (rootElement && completedBtn) {
                rootElement.innerHTML = partialContent;
                // Toggle the visibility
                if (isCompleteMode) {
                    rootElement.style.display = "block";
                    completedBtn.style.background = "#86e7f87a";
                }
                else {
                    rootElement.style.display = "none";
                    completedBtn.style.background = "none";
                }
            }
        }
        catch (error) {
            console.error('Error loading partial:', error);
        }
    });
}
