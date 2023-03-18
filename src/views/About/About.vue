<script lang="ts" setup></script>

<template>
  <div class="about page">
    <div class="container">
      <div class="about__inner">
        <h2 class="about__title">
          Будь продуктивным с помидоркой - эффективный тайм менеджемент
        </h2>
        <div class="about__cards">
          <div class="about__card about__card-big">
            <h3 class="about__card-title">Че такое помидорка?</h3>
            <p class="about__card-text">
              Помидорка(Pomodoro) - это настраиваемое приложение для управления
              временем для мобильных устройств и настольных компьютеров. Его
              цель - помочь любому человеку меньше откладывать на потом и больше
              сосредотачиваться на повседневных задачах - будь то личных или
              профессиональных. Вдохновленный хорошо известной техникой
              “помодоро”, Помидорка делает выполнение задач более эффективным и
              менее напряженным.
            </p>
          </div>
          <div class="about__card">
            <h3 class="about__card-title">Шаги использования</h3>
            <p class="about__card-text">Использовать помидорку очень легко:</p>
            <ul class="about__card-list">
              <li class="about__card-item">Нажми на кнопку "+ Новая задача"</li>
              <li class="about__card-item">Дай название задаче</li>
              <li class="about__card-item">
                Настрой временные промежутки в настройках
              </li>
              <li class="about__card-item">
                После 4 кругов вас ждем более длительный отдых
              </li>
              <li class="about__card-item">Работай :)</li>
            </ul>
          </div>
          <div class="about__card">
            <h3 class="about__card-title">Достоинства помидорки</h3>
            <ul class="about__card-list">
              <li class="about__card-item">
                Можно настроить время персонально
              </li>
              <li class="about__card-item">
                Звуковое/push-уведомление по истечению времени
              </li>
              <li class="about__card-item">
                Возможность включить радио на фоне
              </li>
              <li class="about__card-item">
                Удобный, отзывчивый дизайн для мобильных устройств и настольных
                компьютеров
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import @styles/vars

.about  
  background-color: $primary
  &__title
    text-align: center
    margin: 0 0 35px
  &__cards
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: repeat(2, min-content)
    gap: 20px 20px
  &__card
    padding: 20px
    border: 2px solid $secondary
    border-radius: 10px
    color: $third
    &-big
      grid-column: 1 / 3
    &-title
      margin: 0 0 15px
    &-list
      margin: 10px 0 0
    &-item
      position: relative
      padding: 0 0 0 15px
      color: $third
      &::before
        content: ''
        position: absolute
        left: 0
        top: 50%
        transform: translate(0, -50%)
        width: 6px
        height: 6px
        border-radius: 50%
        background-color: $secondary
      &:not(:last-child)
        margin: 0 0 5px
</style>
