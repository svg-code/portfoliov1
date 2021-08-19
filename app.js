function printName() {
    const firstName = "Nelson";
    const lastName = "Akinro";
    const middleName = "Akinjide";

    return `${lastName}, ${firstName} ${middleName}`;
}

document.querySelector('body').textContent = printName();