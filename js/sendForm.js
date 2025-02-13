const form = document.querySelector(".form-registration-tour");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let formData = new FormData(form);

  try {
    console.log("Отправка данных:", formData);

    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });

    console.log("Ответ от сервера:", response);

    if (!response.ok) {
      throw new Error("Ошибка сервера: " + response.status);
    }

    if (response.headers.get("Content-Type").includes("application/json")) {
      let text = await response.text();
      console.log("Ответ в виде текста:", text);

      if (!text) {
        throw new Error("Пустой ответ от сервера");
      }

      let result;
      try {
        result = JSON.parse(text);
        console.log("Распарсенный результат:", result);
      } catch (error) {
        throw new Error("Ошибка при парсинге JSON: " + error.message);
      }

      if (result.success) {
        document.querySelector(".status-sending-form").textContent =
          "Ваша заявка принята! Проверьте свою почту.";
      } else {
        document.querySelector(".status-sending-form").textContent =
          "Ошибка: " + result.message;
      }
    } else {
      throw new Error("Ответ от сервера не является JSON.");
    }
  } catch (error) {
    console.error("Ошибка:", error);
    document.querySelector(".status-sending-form").textContent =
      "Произошла ошибка при отправке данных.";
  }
});
