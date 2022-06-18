function ErrorModule() {}

ErrorModule.prototype.command = (err) => {
    if (err) {
        console.log(err);
    }
}

ErrorModule.prototype.titleNotExit = () => {
    throw new Error("Title not exits, please enter the correct title in type-challenge");
}

module.exports = ErrorModule