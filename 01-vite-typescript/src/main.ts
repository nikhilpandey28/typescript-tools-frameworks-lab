const username: string = 123;

document.querySelector<HTMLDivElement>('#app')!.innerHTML =
  `<h1>${username}</h1>`;