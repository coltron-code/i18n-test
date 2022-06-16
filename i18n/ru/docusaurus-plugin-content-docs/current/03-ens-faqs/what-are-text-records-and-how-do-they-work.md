---
title: Что такое текстовые записи?
id: Текстовые записи
---

# Что такое текстовые записи и как они работают?

## Текстовые записи

Текстовые записи позволяют прикреплять и хранить публичные и произвольные текстовые данные к вашему имени Ethereum. Ваши текстовые записи по существу контролируются пользователями, могут читаться для приложений для ссылки и использования. Поскольку ваши текстовые записи создаются вами и хранятся в блокчейне Ethereum, они позволяют самосуверенный и децентрализованный пользовательский профиль. Это означает, что ваша информация и профиль могут начать выходить из централизованной архитектуры Web2.

В [сервисе метаданных ENS](https://metadata.ens.domains/docs) эти текстовые записи не ограничиваются блокчейном Ethereum и могут быть упомянуты DNS.

Технические данные по EIP, что делает это возможным, см. [EIP-634](https://eips.ethereum.org/EIPS/eip-634).

### Как я могу добавить текстовую запись?

В [ENS App](https://app.ens.domains)вы можете добавить запись, нажав на ссылку «Добавить/Изменить» во вкладке «Записи»:

![Добавить/Изменить записи](./img/text-records-1.png "Добавить/изменить ваши текстовые записи.")

Вы должны увидеть появляются выпадающие окна, которые позволят вам добавить запись «TEXT», вид текстовой записи (e. "URL") и затем введите информацию для этой записи:

![Добавьте ваш текст.](./img/text-records-2.png "Добавьте свой текст в поля.")

После того, как вы будете готовы, нажмите кнопку «Подтвердить», чтобы отправить транзакцию, и после того, как она будет добыта, вы увидите ее ниже.

**Примечание:** Текстовые записи, как и все записи ENS, видны публично.


### Тип текстовых полей.

Хотя пользователи могут легко определить новые текстовые записи, в менеджере доменов ENS установлено несколько ключей.

#### Обычные Глобальные Ключи

Глобальные ключи должны состоять только из строчных букв, цифр и дефисов.

* **Аватар** - URL-адрес строчных букв к изображению, используемому в качестве аватара или логотипа. Все строчные буквы.
* **Описание** - Описание имени.
* **Отображение -** Каноническое отображаемое имя для ENS.
* **E-mail -** Адрес электронной почты
* **Ключевые слова -** Список ключевых слов, разделенных запятыми, упорядоченных по наиболее значимым словам.
* **URL -** URL сайта

#### Другие ключи сервиса

Ключи службы должны состоять из обратной точки, обозначенной (см. примеры ниже), и содержать хотя бы одну точку. Пользователь может создать свой собственный сервисный ключ в этом формате.

* **com.github** - A Github username.
* **com.twitter** - Имя пользователя Twitter.
* **io.keybase -** Имя пользователя базы ключей.
* **org.telegram -** Телеграмма имя пользователя.


**Примечание:** Имена Пользователей должны **НЕ** включать символ "@" или содержать полный URL-адрес в профиле пользователя.
