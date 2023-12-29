
function getMasterListFromLocalStorage(MasterList) {
    const jsonResponse = localStorage.getItem('`masterList`');

    if (jsonResponse) {
        const savedData = JSON.parse(jsonResponse);

        MasterList.reconstructFromStorage(savedData);
    } else {
        MasterList.buildDefault();
        console.warn('No saved data found in local storage');
    }
};

function setMasterListToLocalStorage(MasterList) {
    const jsonResponse = JSON.stringify(MasterList.prepareForStorage());
    localStorage.setItem('masterList', jsonResponse);
};


export {getMasterListFromLocalStorage, setMasterListToLocalStorage};