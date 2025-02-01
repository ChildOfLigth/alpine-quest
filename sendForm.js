const form = document.querySelector(".form-registration-tour");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let formData = new FormData(form);

  try {
    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });

    let text = await response.text();

    if (!text) {
      throw new Error("Пустой ответ от сервера");
    }

    let result = JSON.parse(text);

    if (response.ok && result.success) {
      document.querySelector(".status-sending-form").textContent =
        "Ваша заявка принята! Проверьте свою почту.";
    } else {
      document.querySelector(".status-sending-form").textContent =
        "Ошибка: " + result.message;
    }
  } catch (error) {
    console.error("Ошибка:", error);
    document.querySelector(".status-sending-form").textContent =
      "Произошла ошибка при отправке данных.";
  }
});
