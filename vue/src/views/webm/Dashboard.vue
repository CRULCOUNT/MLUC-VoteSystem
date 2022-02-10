<template>
  <div class="relative">
    <div class="flex h-screen bg-slate-200">
      <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed z-20 inset-0 bg-slate-200 opacity-50 transition-opacity lg:hidden"></div>

      <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-teal-500 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">

        <div class="flex items-center justify-center mt-10">
          <div class="flex items-left">
            <div class="relative shadow mx-auto hll-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
              <img class="object-cover w-full h-full" src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/188390088_4237818132949817_1445088910336767925_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGientYW3iMPbGyVXOu6cm25yq15sX8_9znKrXmxfz_3KvGnCj5OjJ5vQwhYkHqi0qBnDDRpxETMZqQ8IreMMWf&_nc_ohc=ONQj3ZF4yFkAX8nFzzh&_nc_ht=scontent.fmnl25-1.fna&oh=00_AT-ZGw_igKYHg7pUxmkMaMSAGeyTDUcJFw71FdINgwNr8g&oe=621CFCAB">
            </div>
          </div>
          <div class="mt-auto">
            <h1 class="text-lg text-center font-semibold">
              Superadmin
            </h1>
            <p class="text-sm text-gray-600 text-center">
              Organization | Name
            </p>
          </div>
        </div>

        <div class="flex items-center justify-right mt-2 ">
          <nav class="mt-10">
            <a class="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="">
              <img class="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAA+0lEQVR4nO2ZUQqCUBQFD324qLD1ZQvVbdTPy0SSEHrOA2dACoLOMH3FTUTedEkeSaYkz0rPmGQoW63tZ6g4vH6GBvczlg+v3z78E30+v0Rr+3Od2mztIPuXAwabxgC0AI0BaAEaA9ACNAagBWgMQAvQGIAWoDEALUBjAFqAxgC0AI0BaAGaZYCpvPYV926rrSX0/qGHiXuD++mKxLjzy/Y8v05j5L6InBz6Pk/v4/d5eh+/z9P7c53abO0g+/4XoAVoDEAL0BiAFqAxAC1AYwBagMYAtACNAWgBGgPQAjQGoAVoDEAL0Bhg8Z6+z9P7+H2e3sfv8/S+nJIXmkLImDnbzzAAAAAASUVORK5CYII="/>
              <span class="mx-3">Dashboard</span>
            </a>

            <a class="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="">
              <img class="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFbklEQVR4nO3bW4xdYxQH8N+Yjoh2pNoatA86gjaq0iCqJOraxi1udUmINB4IkYZIJaSIRFxaBA9CpaTiTlHBg2gR+sBT69Io4l7UvRJttdXjYe2dOe1cztn77H1OZ/gnOzOz97fWt9Z/f5e11renXevRhiMxHXtjLf5pqUVNRDfeQ6XqWosZrTSqWTgQ3+F3XIFDcBZWYzPObp1p5SN1/idM3uHZcLxlCJMwkPMphiwJ9TifYsiRkMX5FEOGhDzOpxj0JDTifIpBS0IRzqcYdCSkzq8Te3wR6MQKQcJJBeksBWU4n6ITn+BrdBSsuxCU6XyKC0XYfHRJ+nOjGc7DNEHAGSX2kRlj8JXynYd5goADSu4nE+ZjK44quZ9p2IBXSu4nM1bhjZL7mIb1YhHsKrmvzFiDF0vUX+38viX2kxuPi9x+nxJ07/TOE5HeRryLEQXqrXZ+bIF6S8G5Ikp7RzEkDCrnU5wjSFghora8SJ1fYxA5nyIdCXlJaJrzbQM8G4XrcapY2AZq2xc6MQx/CTKyYISI8zfg74yyKSr4Ea/hNrFA90J/TnWJt9eNZSLCG4wYjxPxBY7Bz/UKLhJvbXo5djUVxwlfHs4itB6LSzGnNXhMP1Nglz7u7Y49xAHFUMHHGCl82w59EZCuC9vKtKjJSH3pteb1RcB/Cv8T0Me9zeJ4ush4vtUYIWoVdccjH4pj66EwQnbB+6JeUTcuEZHUYuxXglHNwnixBVZwcVbhm8SQqQzya7OoIfaJWvH9aaL29iy+rNF2Z0M3zhc+vJZXSVp+nlmQUc3ETGH7tIEaDWuOLX2iQ6S6m/CnqCY1Hc1e5SfhDpHnbxBZ5o8iZV6JBZpc62/WCOjC7Zgt9uM38QS+T56PE8dcc3C1KLBegz+aZF+/KGINmIRvxBCfLwot/WG0GAUb8TkObaDfutaAWtgTz8tfip6A3/AtDssgd4Se7wr2z9l3IQS0iYJCew7Z4fhInBWOzyHfLSo4q7FbDvlCCJiSKMlTGZon0tDj62zfJub9pyIUP0d8BFHBdTn6L4SAyfKdw3eKof9Cne3bcH/S13IRt2/BQXhJVHN6FTNqoBAC4GDZK8Kzks6PraNttfPzk3sTk78vFVOwgjMz2lAIAV3ilCdrQrRQzN907ZiMJ7FUhKYpqp1fUHXvgeTekWKr/hUPZrShEALyboPLxBkhcabwm1gM14h14Sr9O39vcu/OKn0r8HpGG1pKwCosSX6/KNExRYS/SwQJb+nt/H3Jvbt30LcEH2S0oS4CygqFN+o5Elub/JwhFrYL8YiYFrdgrp43Pwf34Nod9HWKfKHpyDsCnhUnuimeFm/9yj7aDvTmU6zBMxltaOkUmJvIpQFQh/h6ZEcSqp2/qx9d3cnzORltaCkB+ydy1ZWYahJuFWd1abmqP+fhxkQm607UUgLgZZHNjam614GHhENpueqGAXTsleh4Lkf/LSdgonDwVb1ziW6cbODvidpFKWuT+AAzKwohYGqi5JSc8pcl8otk+653V7FTVEQNIQ9OSeSn5pRHz1y+pAEdN4sh/7YIq2thkog+txl4etTCbNsvxLnQIebgwkaU4AKR0GwVW+IsUQ9sT66xOC95tlWEvrMa7HORiEAbrno9Jr4XGFOrYQ2MEvXAdXpq9luTK/37h6TNyAb76hKB06O1GtaT5U0QhY2l4i1VGjItos+pIhIcq+e/RT8SR1iNHsu3idD5dDGdPmtQHyIIqYiMbmc+NO3EU8LWq+oRyJLnXysytF/EXr5cVHVb/Y/O7aKqfAIuF4XV60ROUTgOF3tz9bzdWa4tiW1Ziq+ZKz0pRov0dpx8BcsisUmsISvF7pEJ/wI/mcI3qtzB0AAAAABJRU5ErkJggg=="/>
              <span class="mx-3">Votes</span>
            </a>

            <a class="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="">
              <img class="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABmUlEQVRYhe2WzUrDQBSFv7pQxAoKWh9Bt6LoslbElWhbFV9DRSnqSrvyZ6ErfQp/36O6VWrxASpolUK1bVzMDYFI4ySZLIQcuARmzj3nJnPvEIgR4x8iBRSBe+BTogQcAMNRm68ANcDqEO9APkrzthhdAWmgT2IGuJa9FpAzbZ7CefNtD15BOG/AkMkCijhv/hduhbtvsoAHEU1rcDPCLZks4ENEkxrcfuHWdIS7NAtoavIAEn5ydAuoyHNSg2tznk0WcCnPdQ3uhivHCEaAV9TZFjx4O8KpokbXKHKoc7VQo5ZBNWUSmAXuZK8JZE2b21hG3XSdruKWcCLBIlD2MLejDCyYNE4Axy6TF2AU6JUYkzV7vw0c4oxkKJyI6Dewi9OMp6jmHAHOcJpvT7gWcBTWPCtCX8CcrOWBBr8/fQOn+eYlxwKWgpr34HzWTdfeNGoSqhI3wJSLsyW5FaA7SAFrIvBIsLNMAE+isdqJ5HUT2j8V5yLiFxZw4dLyhYqIjAdJFkzgjKZv1CV5IEQBg6JRD6ERI0a0+AG51oK4HStRGQAAAABJRU5ErkJggg=="/>
              <span class="mx-3">Register Voter</span>
            </a>

            <a class="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="">
              <img class="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD8UlEQVR4nO2bSWgUQRSGvzHJJEYQBVHw4IKC4q6JJyXRUw7ixbuoVxE9eXABb+4xIrgFVBSjibjvICJeVET0ogiKCGqMOQRxw+zxUBl8XaleJunq6uj8UEzT79V77/+nq6e6qqeIfxsZYCYwBxgFtAF9TitKCBlgPfABRTjXvgCbgWJ3pdlHCXAeL3G93QWyYYGqgSagGegOCWirdQJ78iR/WYvxDXjW/ynP1wYFOe6IsKn9GAL5eqC8314OnBK2DmCCKVCayHcAuyKQzwJXtL77fER6KXxW6w7VWpCrQAURxotDRCWfQ53w26Ybm/CSTzuyqDqjkgc4K3w36sZmYayIs1ILyALXyI/8TOC38K/UHeTdPu2Xfb7kpwDvhf9j1HzBAxkwrcgC1/HWuj+kj07+OzDL5Jh2AeIg3wes9HNOswClwA2GTr4PNR8wIq0CxEG+Sxx3A1NNndIoQClwk6GR/wksA56LcxtMHdMmQFzkq/ttO8X5g6bOaRLA9FN3IKTPJOCd8P8FLBd2OQs0PmSlRYBS4BbxffMAI4E3wr7WFCQNApQBt4mXfAY4qdnHmQK5FsAW+WNazAEPQTm4FKAMuIN98heAEX4BXQmQJf4x70e+JCioCwGK8D6G2yLfSITFUBcC1Gp5D4X4m8hXCbuJfANK6FAkLcA6Lec5AsYngyN/hojkIVkBZqAmKrl891G//34Im+RkgMMMFDSvPYCkBCgGnohcb4HRAf5h3zzAVrz1nyD4ajIiKQG2izztBC+/TSOcPHiXxOsZBHlIRoCFqA2PXJ5NAb6VqO2sMPKghtQlYAuGpa6oSEKAByLHA/yLrUFtiuR8v+NPPjbYFqBGxO8C5hl8MqirQl4ln4FFlmrywKYAGbw3vjqDz3gGTodfAZMt1GOETQFWidhfgTHClgHWAK1aDQ+BsRZq8YVNAZ6K2LvF+QrgkZa7C9hBvPv4e1E30cDdZlsCzBFx24GJwALURKVHy/saw45NDOjoj98R5GRLgP0i7gvUOO/V8nWilrxGxpw7h0jcbAhQDLRosWXrQT2mTo8xpwnOBFiBmXgvalt7doy5gmDklsTLQvpdvA04jXoR400C+QORhAAXUTe80ai9/Huou3wqoE9D+wJswx1GboN6YvqXUBDAdQGuURDAdQGuURDAdQGuURDAdQGuURDAdQGuURDAdQGuoQvQI47T/LJ0vpBcJMcBArSK47nWykke88VxS5BjI3+XjW7YrChhyH+UNAQ5VuFdO7sOLGZ4Docsqnb9HeOlYR2P4r+CO9zb4SjKlQBHUlCsDfJ5rYEuRf0D8xPu/jg5lNYNfETtPi3Jh3gBBfxH+AO4CP0xEnmpyAAAAABJRU5ErkJggg=="/>
              <span class="mx-3">Create Elections</span>
            </a>

            <a class="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="">
              <img class="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC+UlEQVRoge3YS4hURxQG4G8yOtGoUREDGnyTjS5iCIQsxFFCkKARNz4iCoMh2bp070Jc6lIhKEqCj1XIg+wiOqgkGVAUwRF8xQeOooaZkYkOJouqxurWdvr23Olum/7hQFX999Q5595Tj3NpoYUWWsgJW/FfiQxjaZ5G3spzsjKYgT1oS+QUpuVppBaB1ATjamRnNd5P+kvwPE8DtQrkCo4n/R9wNk8DtQqkV3Egbxw+wh+4jBV19qUqzMJ3uINvsB7XhK+yoI5+VYwObMd97MXUV3APIvduzb2rEF/iKn7Cotc8Nxv78De+1UBHwMc4iR50ZtTrxl9YNgZ+VYz3cAi30KW6N9uGLcLXORznrDl24Rgm5zDXpDjXrmonGE1+jsOfGBjFHAUMxrmqPtcaZqGNFk0TyEhY5+Vaol6y7nWOjvRFpuGg4lqiHnLQCPVL06RW1l2iDfMUv4BHUQg1x9sJN4C+2J6JKQn3VDiDCFeZGQn3HDeElKoIWQP5UKgjbsf+RFzAKkzAddyMXHuUObHfHZ8Zjv25wgH4SEidT/EkcrPxGU5X6ljW1OrAeeEutQib41jB8X8T7pOEK+h2JvxDjE+4rxPubIlu7oE0LJomkGquBHOwO7bnlnAdCffOK3R34J/YLr2jdWF5bC/M6lT7CPxSzMePsf9YWAfPMIR7wmXvahy7L+w0Q+jHEVyMureFDBiK8itORO5uCXcGv0RbhMPwBs5lDbCALhyoVjlHHBB8KYusqTUdOxXvKN1CLQFrhX9YleBnoZqETViZcM+inb5SpXLIutg/wBqhGuwR0mdbwm8Q0rUnkelCzqdj7diY6G0V0qjAf47FWRyrZrH3YX9srxBK1hS/4/ukP1k48fcnY4P4okTvN2HdwFdZnWqa7bdpAsmaWgPC38OHif6J8o9XjH4cFRY5IR37s0yQNZBLwi011cujZt+i+GY8bIwDkdVAhRj2ohSoCk2zRlqBNBqaJpBy6FX/3z/lpHcM426hhRYaHf8D6STVhnv700QAAAAASUVORK5CYII="/>
              <span class="mx-3">Colleges</span>
            </a>

            <a class="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="">
              <img class="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFjklEQVR4nO2b328VRRTHP22pRVsoVmxiS42/ffAf8MEWapqK1aqVKPpCjC9GaTC+SFFBI8T6g0Rjov4FPKjoA0YTrUICNlIgIvJQAtZGJEKpFagmoqLXhzmT2bt3Zu7ee3fvLqXfZBJ6zpmzZ747c2bO7AXmcWmjporPqgO6gAHgNuBGoAOoBaaAn4D9wOfACHC+irEliiuADcApIBexTQNbgCUpxBsrHgROYAZ2BNgM9AI3AJcDVwLXi+w14BD5RDxS9ahjQB0wDPyHGsgYsKKE/iuBUQwR7wILYo4xMdQA21CB/w2spbxcUwM8A/wjvrZzkZDwOirgs0BnDP46gTPi870Y/CWKAVSg54Fuh00DsA7YC/whbS8wCFzm6NODmk054NEY440VTcBxVJBPOmzage9wZ/+DYmPDU2IzhUqcmcOLqAC/Qe3tYTRgBn8cWAUskjaA2iFywLfYZ0ItcEBsXo459opRB/yMCq7LYbMOM/gWi74l4GOtw0e36H/FvVz6gV2Y5bUTuLfoCCp01CeBjXv8jYnNKo/NQ5hZ5IKeKf0W3Su4l9cWj8+KHb0huo0en7+LzSKPzWKxmfXYvCo2b4fk/SL/C3gWaJO2XmQ5Is6Echx9KfK7PX41Ab4E1kJxAnrEZjQk3yXy9ZY+Q6L7yuO3Ikf6nO/K4KC2uhxqmrvwMMWXwC1icyok1wS3Wfq0UZzYihz9KfJmj99BsZkAllr0S4Ef8SdBUEtInzWCOOeJux1zOCuKchzppeFb3w2oLS4HTAKrUYQ1owqeSdEdwJ3hARqxE6CX4ZClzwbRfeHxW5GjkyK/1uGzHngac6T1tTNiW+/wdZ3YnQzJV2Jy1xDqBbZLzPoF9Tp8VuxoD+6tqRV10aEHOILaLUZRM+ms/Huj6LTdPukbxl2i/9qi24qb2K1Fxl2Ro7dEtzkk7wCOie4o0YqjzlCfZSG93qKHQ/L7gNOeuE9jf0EFKMeRfisTmNJ3Aeot5VAzZHGUhwuaMfcBu1EnTcT3uMhvD9j3ARdEvgN199AorRv4RHQX8G/VZTuqB34RXY/IdL44SuHu0IGq72elfQzcGrJZAvxA/pbcK3+fwNQbV6GWUU6e6cLzmARuO4pX7OgFkR9EVYbTqBuhO0L9O4AZCmfWDIXTfTlm1jVicsmgJZ4dnpg19At8zjewch01YWaBToojlr4fiu5T1ICXAZ+J7AOL/c6Qzwnyt0ldY0S5crtTbMdsyjgcPUD+W33M0ndWdMG33SGycxb7xwP+/kXtUkHo2dQUIW59iJqxKeNy9GYg4Psteq2LKh8I6GxT19XPBad9XI5qUVM5hzoiP0H+pWhUAvSlqD57bMN+uZo5AkBtW+8EbHZjLkqiENCFWfM51EWr7ZYp2K/UlpyjAFaT/0XocAQCgjbHUXnFB33WKKXtSdRRCM3ASxQersII6qaATUTLRxcN6oF7KE5AH+5CaE6g1F0gUbgSyyWDLBLwPvAb6lC0HbgJuBn4CHWIcsldNUXmECUJBtu0tKhyW02RKRQjwFYjlCq31RSZQTECbDVCqXJbTZEZlLoLxCW3IotJsKqYJyDtANJGnAQsRJ3fj6F+zTGJurn1fSyZM1hIfvkabIfIv9/PVBKMC5sw5WsvqopbgfmWfxhDQtIBpkKA/pAR/mLUiqnvNQlzkgDfx9EwCXOSAP1ld7lDHyRhThIwLA89gv2DJhSSkBRSIaAJ8xO4YMILoxX1SxHbB5O4kAoBAFcD38vDx4Fr0giCFAmAbJCQKgGQPgmpEwDpkpAJAsB+CEoadWSIAKg+CWswsy4zqCYJ+uczaxJ8RlmoFgl6+tcVM0wDQRL2J/SMTK1/G5KuBkv2Xc3/OapRjTcUeVxp3AmGf+YeN2y/IJ3HPBz4H8Pyzs6RdXo7AAAAAElFTkSuQmCC"/>
              <span class="mx-3">Candidates</span>
            </a>
          </nav>
        </div>
        <div class="flex items-center justify-right mt-2">
          <nav class="mt-6">
            <a class="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="">
              <img class="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAADlElEQVRoge3bTYxlQxTA8V8bo5HMDCOI7vExZswGEdGCYZiFbx2xwCST2A5LFlY2EmlsbIjExkZCQkRiQYiPidC+LYiFZAzx2UMi0cMk3aK1RdWT56q63ffm9nt92/0nN/X6Vp165/S9deqcOt2UcwXewxwWV/k1F3W9bgmbstyMhVVgSNVrAZNVjV2PmTjBA9hYdYIhsBFTgs4/CDYsm4ui4AGMNK7ayjGCLwXdL0wNOCojuCG230fhtrCI7+LnTakBOYPXLHUMPgn3YHNirjtxfkJmEjfV+K7GObqGzD48iFE83Hf/EjyBV3F9Qeb52B6bmXNdlD0r0/817sJf2ILH8QYerah7LYNHY1tUfrTQpvpybMAdJePmcC9mcZ6wZZ5sQAZ/hMP4sHD/AA5hOiHzjnLn9yvOxdZM/1eCsfAKJoSn3hi7BQX3NznpgNgv6L471ZlzWl8Iv9U3V0ipoZF7pQ9h2yAVaZCeH/hzqFoMiDNxRPDmp6UGLOW0RnAtLhA8aaX4dMAch9txPF4QcoFKnCh4xGFnP1Wvt/w3KPqHsif8mJBbzuA5YS9czcziY7yuRvw/LqyD33FGs3oNl9y2dLawfj/Ft4NTZ+XJGbwutn8MSpEG2YX7VXSwbY60XhN0vzzVWSeWnsTT2IuX+u6P4xM8ifsKMtOCT9hVMu925dnSwb6fe7H0L4mxPZuST7iOwRPC+dHF/m3wOTgVOxMyqXv9nIDP5bOl+Tj3LG7Ay3gfly1b60gdg+djW9ym5gttsa9sq/gNT8lnSwfjGPgMLwrbT2OUreHNuFv6xGOfkOYVuVF4MoOgNFvK0WanVSs9XLPkDD4c2y3ady59evw8WzawyHr8JLwaU9pRedgkHC4uCvF/ZYe8R0iih5391Kkt3ZozqmwNP4sr8a70VrOaadMyrE1/MW3G6j6saIzaxbS2UruYNoZvhDRrTZEzeIdw0nFVoq8rpkW6YlqiL0dXTCvQFdNK6LKlfnIG9wpRxwxKkQapVUwbEzziEe06iK9dTPtRODe6BR/gGfy8Ago2ySnCSWrtYto27UwPaxfTHhECgq6Y1mZyXnqr/1kxrfeqt7GYVspaDDweEg4gx1KddQyeFBxEMd0bF2LpqYTMNN5eYt7tuDpzFf+iaEJIU1NcKmxRO1KdXTFtGXTFtEhXTBsSXXrYT1dMi3TFtBZdC7itqrE9dgpBQ1v+FW8a15QZ9DejWB72kNvQTQAAAABJRU5ErkJggg=="/>
              <span class="mx-3">Update Master List</span>
            </a>
          </nav>
        </div>
      </div>

      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1>Dashboard</h1>
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style scoped>

</style>
