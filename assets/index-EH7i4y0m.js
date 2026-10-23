const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/store-btPIUiaI.js","assets/store-ChhZ-Gh_.css","assets/cloud-B0ihxQqc.js","assets/cloud-DkdRE9af.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();const Ft="modulepreload",jt=function(e){return"/"+e},Cn={},$n=function(n,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=jt(l),l in Cn)return;Cn[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Ft,d||(m.as="script"),m.crossOrigin="",m.href=l,r&&m.setAttribute("nonce",r),document.head.appendChild(m),d)return new Promise((y,w)=>{m.addEventListener("load",y),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function c(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return o.then(s=>{for(const r of s||[])r.status==="rejected"&&c(r.reason);return n().catch(c)})},Ht="Главная",Wt="Студия",qt="Новости",zt="Демо",Vt="Обучение",Kt="Сообщество",Yt="Магазин",Zt="Поддержать",Xt="Скачать",Jt="Проект",Qt="Поддержка",ea="Блог",na="Сообщество",ta="Лицензия",aa="Закрыть",ia="Возможность",sa="Документация",oa="Примеры",ra="Возможности",ca="Начало",la="Категории",da="Исходный код",ua="Редактор",pa="Клиент",ma="Галерея",ha="Телефон",ga="Создавайте",fa="Играйте",ba="Язык",ya="релиз",wa="Игры",va="Ввод",Aa="Сцены",Sa="Интерфейс",Ea="Движок",ka="прочитано",xa="Аватар",Ta="Почта",Ia="Отмена",Ca="Сохранено",$a="Бесплатно",_a="Отозвать",Da="Видимость",Ma="Описание",Ra="ПРОЕКТ",Pa="Игра",La="ПУБЛИКАЦИИ",Na="опубликована",Oa="одобрено",Ba="отклонено",Ua="Заблокировано",Ga="Аккаунт",Fa="Создать",ja="Cloud",Ha="Опубликовано",Wa="Администрирование",qa="Нет",za="Текстуры",Va="Материалы",Ka="Аудио",Ya="Анимации",Za="Скрипты",Xa="Шаблоны",Ja="Инструменты",Qa="БЕСПЛАТНО",ei="Постоянная ссылка",ni="Оценка",ti="Изменить",ai="Удалить",ii="Версия",si="Категория",oi="Нравится",ri="Пожаловаться",ci={Home:Ht,Studio:Wt,News:qt,Demos:zt,Learn:Vt,Socials:Kt,Store:Yt,Donate:Zt,Download:Xt,Project:Jt,Foundation:Qt,Blog:ea,Community:na,"Source code":"Исходный код",License:ta,"Ada home":"Ada — главная","Open menu":"Открыть меню","Close menu":"Закрыть меню","Main navigation":"Основная навигация","Social links":"Социальные сети","Ada on GitHub":"Ada на GitHub","Ada on Discord":"Ada в Discord","Ada on Twitter":"Ada в Twitter","Ada on Telegram":"Ada в Telegram","Loading GitHub stars":"Загрузка числа звёзд на GitHub","01 / Introduction":"01 / Знакомство","Open source. Endless possibilities.":"Открытый код. Безграничные возможности.","A game engine for Swift developers":"Игровой движок для Swift-разработчиков","Your ideas.":"Ваши идеи.","Built in":"Созданы на","An open-source engine for the worlds you want to create. Build 2D and 3D games with modern Swift and tools that feel right at home.":"Движок с открытым кодом для миров, которые вы хотите создать. Разрабатывайте 2D- и 3D-игры на современном Swift с привычными инструментами.","Read the docs":"Документация","Available platforms":"Доступные платформы","Built to make things":"Создан для творчества","Ada Editor showing a Swift project and source code":"Проект на Swift и исходный код в Ada Editor","Native tools. Your creative space.":"Нативные инструменты. Пространство для творчества.","02 / Capabilities":"02 / Возможности","A complete creative toolkit":"Всё для ваших идей","Small details.":"Маленькие детали.","Big possibilities.":"Большие возможности.","Everything you need to bring a world to life, built around the way you write Swift.":"Всё, что нужно, чтобы оживить ваш мир, с привычным подходом к коду на Swift.","Explore feature":"Подробнее","Loading animated feature preview":"Загрузка анимированного превью","Loading preview":"Загрузка превью","Close feature details":"Закрыть описание возможности",Close:aa,Feature:ia,"03 / From the team":"03 / От команды","All news":"Все новости","The latest from Ada.":"Новое в Ada.","Updates, ideas and things we’re building.":"Обновления, идеи и наши разработки.","04 / Made together":"04 / Создаём вместе","Independent. Open. Community-built.":"Независимый проект. Открытый код. Вместе с сообществом.","Make something":"Создайте что-то","of your own.":"своё.","Share your work, ask a question, or help shape what comes next.":"Делитесь работами, задавайте вопросы и помогайте развивать проект.","Join the community":"Присоединиться","© 2021-2026 Vladislav Prusakov and contributors. All rights reserved.":"© 2021–2026 Владислав Прусаков и участники проекта. Все права защищены.","Learn Ada":"Изучайте Ada","Master game development in Swift. From your first sprite to advanced Metal rendering techniques.":"Освойте разработку игр на Swift: от первого спрайта до продвинутого рендеринга на Metal.",Documentation:sa,"Read guides, API notes and examples for the engine core, ECS, renderer, physics and UI systems.":"Руководства, описание API и примеры для ядра движка, ECS, рендеринга, физики и интерфейсов.","Open documentation":"Открыть документацию",Examples:oa,"Explore sample projects such as tilemaps, arcade games and Swift-first game prototypes.":"Изучайте примеры: тайловые карты, аркады и игровые прототипы на Swift.","Browse examples":"Посмотреть примеры",Features:ra,"Return to the home page feature overview for a quick summary of what Ada can do.":"Познакомьтесь с возможностями Ada на главной странице.","View features":"Посмотреть возможности","Join Ada discussions, follow development and help the project grow together with other Swift developers.":"Обсуждайте Ada, следите за разработкой и развивайте проект вместе с другими Swift-разработчиками.","GitHub Discussions":"Обсуждения на GitHub","Ask questions, share ideas and discuss engine development directly with the community.":"Задавайте вопросы, делитесь идеями и обсуждайте разработку движка с сообществом.","Join discussions":"Участвовать в обсуждениях","Source Code":"Исходный код","Report issues, contribute fixes and review the current engine implementation on GitHub.":"Сообщайте об ошибках, предлагайте исправления и изучайте исходный код движка на GitHub.","Open repository":"Открыть репозиторий","Ada is free and open source forever. Donations help support ongoing development, examples and documentation.":"Ada навсегда останется бесплатным движком с открытым кодом. Пожертвования помогают развивать движок, примеры и документацию.","Support the project":"Поддержать проект","If Ada is useful to you, consider supporting development through the donation page.":"Если Ada полезен вам, поддержите его разработку пожертвованием.","Donate on Boosty":"Поддержать на Boosty","Contribute instead":"Помочь проекту","Code contributions, bug reports, examples and documentation improvements are also a great way to help.":"Код, сообщения об ошибках, примеры и улучшения документации — тоже отличный способ помочь.","Contribute on GitHub":"Помочь на GitHub","Getting Started":"Первые шаги","Get Started":"Начать","Install the engine and create your first window in under 5 minutes.":"Установите движок и создайте первое окно меньше чем за 5 минут.","Understand the Entity-Component-System architecture that powers Ada.":"Разберитесь в архитектуре Entity-Component-System, на которой построен Ada.","2D Physics Tutorial":"Урок по 2D-физике","Add rigid bodies, collision shapes, and handle physics callbacks.":"Добавьте твёрдые тела, формы коллизий и обработку физических событий.","API Reference & Documentation":"Справочник API и документация","Core Framework":"Ядро движка","Math, Collections, and basic Engine systems.":"Математика, коллекции и основные системы движка.","Rendering Pipeline":"Конвейер рендеринга","Materials, Shaders, Render Graphs, and Metal integration.":"Материалы, шейдеры, графы рендеринга и интеграция с Metal.","Audio System":"Аудиосистема","Spatial audio, sound effects, and music streaming.":"Пространственный звук, звуковые эффекты и потоковое воспроизведение музыки.","Contribute to source code":"Участвовать в разработке","Live chat & support":"Общение и помощь","r/AdaEngine discussions":"Обсуждения в r/AdaEngine","Announcements channel":"Канал с новостями","Follow @ada_engine":"Следить за @ada_engine","Monthly Sponsorship":"Ежемесячная поддержка","Become a backer on Boosty to get early access to updates, exclusive tutorials, and your name in the engine credits.":"Поддержите нас на Boosty: получите ранний доступ к обновлениям, эксклюзивные уроки и упоминание в благодарностях движка.","Support on Boosty":"Поддержать на Boosty","One-time Donation":"Разовое пожертвование","Prefer to make a one-time contribution? You can support us via DonationAlerts with various payment methods.":"Хотите помочь разово? Поддержите нас через DonationAlerts удобным способом оплаты.","Donate via DA":"Поддержать через DA","01 / Learn Ada":"01 / Изучайте Ada","01 / Support the project":"01 / Поддержка проекта","Support Ada":"Поддержите Ada","Ada is an independent open-source project. Your support helps us dedicate more time to development and tooling.":"Ada — независимый проект с открытым кодом. Ваша поддержка позволяет уделять больше времени движку и инструментам разработки.","Donation options":"Способы поддержки","Code Contributions":"Участие в разработке","Can't support financially? Code contributions are equally valuable! Check out our":"Не можете помочь финансово? Участие в разработке не менее ценно! Посмотрите"," good first issues":" задачи для новичков","good first issues":"задачи для новичков","on GitHub to get started.":"на GitHub, чтобы начать.","01 / Made together":"01 / Создаём вместе","Join the Community":"Присоединяйтесь к сообществу","Connect with other developers, share your projects, and contribute to the engine.":"Общайтесь с разработчиками, делитесь проектами и участвуйте в развитии движка.","Ada community links":"Сообщество Ada","01 / Engine news":"01 / Новости движка","Engine News":"Новости движка","Updates, release notes, and engineering deep dives from the Ada team.":"Обновления, заметки о релизах и технические статьи команды Ada.","Article metadata":"Сведения о статье","Read full article →":"Читать статью →","No articles yet":"Статей пока нет","Fresh Ada updates will appear here soon.":"Скоро здесь появятся новости Ada.","Back to News":"К новостям","On this page":"Содержание","Open article sections":"Открыть содержание статьи",Start:ca,"Fullscreen article image":"Изображение статьи на весь экран","Close fullscreen image":"Закрыть изображение","Live WebAssembly examples":"Интерактивные примеры WebAssembly","Ada Demos":"Демо Ada","Explore browser builds generated from the Swift files in the Ada repository. Each demo page includes the embedded build and the source that produced it.":"Запускайте в браузере примеры из Swift-файлов репозитория Ada. На каждой странице есть интерактивное демо и его исходный код.","Demo categories":"Категории демо",Categories:la,"No demos published yet":"Демо пока нет","The website will show demos after the Ada export workflow publishes the first manifest.":"Демо появятся после первой публикации сборок Ada для браузера.","Open demo":"Открыть демо","Source only":"Только исходный код","Demo not found":"Демо не найдено","Check the address or return to the demos page.":"Проверьте адрес или вернитесь к списку демо.","Back to Demos":"К списку демо","Open demo fullscreen":"Открыть демо на весь экран","Open fullscreen":"На весь экран","Exit fullscreen":"Выйти из полноэкранного режима","Exit demo fullscreen":"Выйти из полноэкранного режима демо","Build artifact is not available":"Сборка недоступна","This demo is listed in the manifest, but the WebAssembly export was not published.":"Демо есть в списке, но его сборка WebAssembly ещё не опубликована.",Source:da,"Open on GitHub":"Открыть на GitHub","Article not found":"Статья не найдена","Check the address or return to the blog.":"Проверьте адрес или вернитесь к новостям.","Page not found":"Страница не найдена","This route does not exist yet.":"Такой страницы пока нет.","404 / Page unavailable":"404 / Страница недоступна","Page failed to load":"Не удалось загрузить страницу","Refresh the page or try again in a moment.":"Обновите страницу или попробуйте чуть позже.","The native editor for your Mac. Build with AdaScript and Swift.":"Нативный редактор для Mac. Создавайте на AdaScript и Swift.","Create Ada games on your Windows PC.":"Создавайте игры на Ada на вашем ПК с Windows.","Build with the open-source engine on Linux.":"Создавайте на Linux с движком с открытым кодом.","Installer coming soon":"Установщик скоро появится","Get the source code ↗":"Скачать исходный код ↗","Create and run AdaScript projects on iPad.":"Создавайте и запускайте проекты на AdaScript на iPad.","Download on the App Store":"Загрузить в App Store","Make something of your own":"Создайте что-то своё","Download Ada":"Скачать Ada","Choose your platform. Start building.":"Выберите платформу и начните создавать.","Release notes ·":"О релизе ·","Ada is free and open source. Desktop downloads appear here as installers are released.":"Ada — бесплатный движок с открытым кодом. Установщики для компьютеров появляются здесь по мере выпуска.","Download · ARM64":"Скачать · ARM64","Download · Intel / AMD":"Скачать · Intel / AMD",Editor:ua,"A native scene editor and Swift-first workspace for building Ada projects.":"Нативный редактор сцен и рабочее пространство для проектов Ada на Swift.","Open Ada Editor":"Открыть Ada Editor",Client:pa,"A focused desktop client for project-oriented AI agent sessions and day-to-day work.":"Настольный клиент для работы с ИИ-агентами в проектах и повседневных задач.","Open Sloppy Client":"Открыть Sloppy Client",Showcase:ma,"Project screenshots":"Скриншоты проектов","Choose project":"Выбрать проект","Data Driven":"Данные в основе","Ada build around custom Entity Component System. Simple to use, fast and cache-friendly for your game architecture.":"Ada построен на собственной Entity Component System: простой, быстрой и эффективной при работе с кешем.","2D Renderer":"2D-рендеринг","Supports real-time 2D rendering for your games and apps. Write custom shaders, materials and render pipelines.":"2D-рендеринг в реальном времени для игр и приложений. Создавайте свои шейдеры, материалы и конвейеры рендеринга.","2D Physics":"2D-физика","Ada supports Box2D v3 physics with parallel calculations, lightweight memory usage and fast simulation.":"Ada поддерживает Box2D v3: параллельные вычисления, экономное использование памяти и быструю симуляцию.","Render Graphs":"Графы рендеринга","Construct your own render pipeline using powerful render graphs.":"Создавайте собственный конвейер с помощью графов рендеринга.","Custom UI Engine":"Собственный UI-движок","Create your own UI using a SwiftUI-like approach that fits naturally into Ada scenes.":"Создавайте интерфейсы в стиле SwiftUI, органично встроенные в сцены Ada.","Free and Open Source":"Бесплатный и открытый","Ada is 100% free for you. Licensed by MIT. Learn, modify or use without royalties or runtime fees.":"Ada полностью бесплатен и доступен по лицензии MIT. Изучайте, изменяйте и используйте без роялти и платы за исполнение.","Write gameplay scripts with AdaScript, powered by the Gravity language runtime and integrated with Ada ECS.":"Пишите игровые скрипты на AdaScript с рантаймом Gravity и интеграцией с Ada ECS.","3D Rendering":"3D-рендеринг","Build 3D scenes with cameras, materials, lighting, skyboxes and extensible render pipelines.":"Создавайте 3D-сцены с камерами, материалами, освещением, скайбоксами и расширяемыми конвейерами рендеринга.","3D Physics":"3D-физика","Simulate rigid bodies, collisions and constraints in 3D with the integrated Box3D physics engine.":"Симулируйте твёрдые тела, столкновения и ограничения в 3D со встроенным физическим движком Box3D.","Ada is built around a custom, data-oriented Entity Component System inspired by modern Swift APIs. Components keep game state small and explicit, while systems operate through typed queries, resources, schedules and macros such as @Component and @System. This makes gameplay code modular, cache-friendly and easier to scale from a tiny prototype to a full scene with input, animation, physics and rendering working together.":"В основе Ada — собственная Entity Component System, ориентированная на данные и вдохновлённая современными API Swift. Компоненты хранят компактное и явное состояние игры, а системы работают с типизированными запросами, ресурсами, расписаниями и макросами @Component и @System. Такой код остаётся модульным, эффективно использует кеш и легко растёт от прототипа до полноценной сцены с вводом, анимацией, физикой и рендерингом.","Ada ships with a high-level 2D rendering stack for sprites, text, tilemaps, cameras and custom materials. The demos cover sprite animation, transparency, lighting, text rendering, WGSL experiments and stress scenes, while the renderer still leaves room for lower-level control when you need custom shaders or pipeline work. It is designed for Swift-first game code where drawing a scene should feel direct, but not boxed in.":"Ada предлагает высокоуровневый 2D-рендеринг спрайтов, текста, тайловых карт, камер и собственных материалов. В демо есть анимация спрайтов, прозрачность, освещение, текст, эксперименты с WGSL и нагрузочные сцены. При необходимости доступны низкоуровневое управление, свои шейдеры и конвейеры. Отрисовка сцены на Swift остаётся простой и гибкой.","The Physics2D plugin integrates Box2D with Ada entities through components such as PhysicsBody2DComponent and Collision2DComponent. Simulation runs on the fixed-update schedule, then syncs transforms back into the scene so gameplay systems can react through the same ECS flow as the rest of the engine. It includes collision events, debug drawing support and world resources for direct access when a game needs deeper physics control.":"Плагин Physics2D связывает Box2D с сущностями Ada через PhysicsBody2DComponent и Collision2DComponent. Симуляция выполняется с фиксированным шагом, затем трансформации синхронизируются со сценой. Игровые системы обрабатывают результат в общем потоке ECS. Доступны события столкновений, отладочная отрисовка и прямой доступ к физическому миру для более тонкой настройки.","Rendering is organized around RenderGraph resources, nodes, slots, subgraphs and an executor that runs the graph each frame. Core 2D and 3D pipelines are assembled as graphs, and cameras can point at specific render subgraphs for flexible composition. Diagnostics can snapshot nodes, edges, subgraphs and frame records, which makes custom pipelines easier to reason about when you add post-processing, offscreen passes or specialized rendering stages.":"Рендеринг построен на ресурсах RenderGraph, узлах, слотах, подграфах и исполнителе, запускающем граф каждый кадр. Основные 2D- и 3D-конвейеры собираются из графов, а камеры могут использовать отдельные подграфы. Диагностика сохраняет узлы, связи, подграфы и данные кадров, помогая разрабатывать постобработку, внеэкранные проходы и специализированные этапы рендеринга.","AdaUI brings a SwiftUI-like declarative layer into Ada with views, result builders, environment values, layout containers, gestures, animation, text fields, scroll views and navigation primitives. UI can live naturally beside game scenes, and the engine includes tooling such as a 3D AdaUI debug view for inspecting live UI trees. The goal is to make editor panels, HUDs and in-game interfaces feel native to the same Swift codebase as your gameplay.":"AdaUI — декларативный интерфейс в стиле SwiftUI: представления, result builders, окружение, контейнеры, жесты, анимация, текстовые поля, прокрутка и навигация. Интерфейсы соседствуют с игровыми сценами, а 3D-отладчик AdaUI позволяет изучать дерево UI во время работы. Панели редактора, HUD и игровые интерфейсы становятся естественной частью вашего кода на Swift.","Ada is MIT licensed and developed in the open, with source, tutorials, generated API documentation, demos and build guides available from the repository. You can study the engine internals, modify them for your project, ship without royalties or runtime fees, and contribute fixes, examples or documentation back to the community. The project is still evolving, so the roadmap is visible where the code actually lives.":"Ada развивается открыто под лицензией MIT. В репозитории доступны исходники, уроки, документация API, демо и инструкции по сборке. Изучайте устройство движка, изменяйте его для своего проекта, выпускайте игры без роялти и делитесь исправлениями, примерами и документацией с сообществом. Проект растёт, а планы развития находятся рядом с кодом.","AdaScript brings the Gravity scripting runtime into Ada for fast gameplay iteration. Scripts declare their component queries and use capability-scoped access to read or update reflected ECS fields, so scripted systems participate in the same scheduling and access rules as native Swift systems. Keep performance-critical code in Swift and move tuning, behaviours and gameplay logic into reloadable scripts.":"AdaScript использует рантайм Gravity для быстрой итерации над игровым процессом. Скрипты объявляют запросы к компонентам и читают или изменяют поля ECS в пределах выданных полномочий. Скриптовые системы следуют тем же правилам доступа и расписаниям, что и системы на Swift. Оставляйте критичный к скорости код на Swift, а настройки, поведение и игровую логику переносите в перезагружаемые скрипты.","Ada’s 3D stack is built around the same render-graph architecture as its core renderer. Compose camera views, materials, meshes, lights, environment settings and skyboxes into a Swift-first scene, then extend the pipeline with your own passes and subgraphs when a project needs custom post-processing or rendering techniques.":"3D-стек Ada использует ту же архитектуру графов рендеринга, что и основной рендерер. Объединяйте камеры, материалы, меши, свет, окружение и скайбоксы в сцене на Swift. Расширяйте конвейер собственными проходами и подграфами, когда нужны особая постобработка или приёмы рендеринга.","Ada includes a Box3D-backed 3D physics path for rigid body simulation, collision queries and joint constraints. It is designed to work alongside Ada entities and transforms, with a dedicated example target for validating 3D physics scenes. Box3D brings a C17 rigid-body simulation core while Ada keeps the scene-facing API in Swift.":"Ada использует Box3D для симуляции твёрдых тел, запросов столкновений и ограничений сочленений в 3D. Физика работает с сущностями и трансформациями Ada; отдельный пример помогает проверять физические сцены. Ядро Box3D написано на C17, а API сцены остаётся на Swift.","Your next game.":"Ваша следующая игра.","Starts here.":"Начинается здесь.","A home for your ideas, scenes, and code.":"Дом для ваших идей, сцен и кода.","Create with Ada on your desktop, iPad, or phone.":"Создавайте с Ada на компьютере, iPad или телефоне.","Explore Ada Studio platforms":"Платформы Ada Studio","Desktop / iPad":"Компьютер / iPad",Mobile:ha,"Ada Studio desktop scene workspace, entity hierarchy, and component inspector in a MacBook frame":"Сцена, иерархия сущностей и инспектор компонентов Ada Studio на MacBook","Ada Studio mobile project library with a Medieval Arena preview in an iPhone frame":"Библиотека проектов Ada Studio с превью Medieval Arena на iPhone","More room to build. More ways to create.":"Больше пространства. Больше способов творить.","Powered by Ada":"На базе Ada","Space for your":"Пространство для","big ideas.":"больших идей.","A focused workspace for the whole picture. Shape your scene, find the right file, and keep your code close to the world you’re building.":"Всё для работы над проектом: создавайте сцены, находите нужные файлы и держите код рядом с миром, который строите.","Get Ada Studio":"Скачать Ada Studio","Get it for iPad":"Скачать для iPad","Build a world. Make it yours.":"Создайте свой мир.","Work with scenes, entities, and components. Turn a collection of assets into the start of something playable.":"Работайте со сценами, сущностями и компонентами. Превратите набор ресурсов в начало настоящей игры.","Skeletal Garden: animated robots, textured props, and a wooded landscape rendered by AdaEngine":"Skeletal Garden: анимированные роботы, объекты с текстурами и лесной пейзаж в AdaEngine","Skeletal Garden · Made with Ada":"Skeletal Garden · Создано на Ada","Your code. Your creative flow.":"Ваш код. Ваш ритм творчества.","Write in Swift and AdaScript. Keep gameplay logic, project files, and tools together.":"Пишите на Swift и AdaScript. Держите игровую логику, файлы проекта и инструменты вместе.","Swift component example":"Пример компонента на Swift","A little help. A lot of possibility.":"Немного помощи. Много возможностей.","Work with an AI agent inside your project. Explore an idea, ask about code, and shape your next change.":"Работайте с ИИ-агентом прямо в проекте. Развивайте идеи, задавайте вопросы о коде и готовьте изменения.","A bigger canvas. A familiar workspace.":"Больше пространства. Привычные инструменты.","Desktop and iPad put your project at the center, with room for scenes, code, and the tools around them.":"На компьютере и iPad в центре внимания — ваш проект: сцены, код и все необходимые инструменты.","Small screen.":"Маленький экран.","Big imagination.":"Большое воображение.","An idea can happen anywhere. Give it a place to grow, right on your phone.":"Идея может прийти где угодно. Дайте ей развиться прямо на телефоне.","Start with an idea.":"Начните с идеи.","Describe the game you have in mind. Work with an agent to build it into an Ada project.":"Опишите задуманную игру. Вместе с агентом превратите её в проект Ada.","Go from build to play.":"От разработки к игре.","Open your game on the same device. Try it, feel it, and find your next idea.":"Откройте игру на том же устройстве. Пробуйте, играйте и находите новые идеи.","Show what you mean.":"Покажите, что нужно изменить.","Capture a game frame, mark the part you want to change, and send your feedback to the agent.":"Сделайте скриншот игры, отметьте нужную область и отправьте пожелания агенту.","Get Ada for iPhone":"Скачать Ada для iPhone","Ada Studio Mobile Build workspace for Medieval Arena in an iPhone frame":"Разработка Medieval Arena в Ada Studio Mobile на iPhone","Medieval Arena running in Ada Studio Mobile Play in an iPhone frame":"Игра Medieval Arena в Ada Studio Mobile на iPhone",Build:ga,Play:fa,"Build and Play in Ada Studio Mobile":"Создавайте и играйте в Ada Studio Mobile","Make something only you could make.":"Создайте то, что можете только вы.","An idea is a great start.":"Идея — отличное начало.","Let’s make it a game.":"Превратим её в игру.","Explore Ada demos":"Посмотреть демо Ada","Explore the editor on GitHub ↗":"Редактор на GitHub ↗",Language:ba,"This article is currently available in English.":"Эта статья пока доступна на английском языке.",release:ya,"Ada - Open-Source Swift Game Engine":"Ada — игровой движок на Swift с открытым кодом","Ada is an open-source game engine for Swift developers, with ECS, 2D and 3D rendering, physics, UI, editor tooling, and WebAssembly demos.":"Ada — игровой движок на Swift с открытым кодом: ECS, 2D- и 3D-рендеринг, физика, UI, редактор и демо на WebAssembly.","Download Ada — Mac, Windows, Linux and iOS":"Скачать Ada — Mac, Windows, Linux и iOS","Download Ada for your platform. Find desktop releases, source code and the iOS app on the App Store.":"Скачайте Ada для вашей платформы: версии для компьютеров, исходный код и приложение для iOS в App Store.","Ada Studio - Game Creation on Desktop, iPad and Mobile":"Ada Studio — создание игр на компьютере, iPad и телефоне","Meet Ada Studio. Build scenes, write Swift and AdaScript, and work with an AI agent on desktop and iPad. Bring your game ideas to life on mobile.":"Знакомьтесь с Ada Studio. Создавайте сцены, пишите на Swift и AdaScript, работайте с ИИ-агентом на компьютере и iPad. Воплощайте игровые идеи на телефоне.","Ada News - Swift Game Engine Updates":"Новости Ada — обновления игрового движка на Swift","Read Ada updates, release notes, engineering deep dives, and Swift game development articles from the project team.":"Читайте новости Ada, заметки о релизах и технические статьи команды о разработке игр на Swift.","Ada Demos - Swift WebAssembly Game Examples":"Демо Ada — игровые примеры на Swift и WebAssembly","Explore Ada WebAssembly demos built from Swift source files, including 2D rendering, UI, physics, and scene examples.":"Запускайте демо Ada на WebAssembly из исходников на Swift: 2D-рендеринг, интерфейсы, физика и сцены.","Learn Ada - Swift Game Engine Tutorials and Examples":"Изучайте Ada — уроки и примеры разработки игр на Swift","Learn Ada with Swift game development guides, ECS fundamentals, rendering notes, physics examples, and links to source code.":"Изучайте Ada: уроки разработки игр на Swift, основы ECS, рендеринг, примеры физики и исходный код.","Ada Community - Swift Game Development Contributors":"Сообщество Ada — разработчики игр на Swift","Join the Ada community, follow development, discuss Swift game engine ideas, and contribute to the open-source project.":"Присоединяйтесь к сообществу Ada, следите за разработкой, обсуждайте идеи и участвуйте в проекте с открытым кодом.","Support Ada - Open-Source Swift Game Engine":"Поддержите Ada — игровой движок на Swift с открытым кодом","Support Ada development through donations, code contributions, examples, bug reports, and documentation improvements.":"Поддержите Ada пожертвованиями, кодом, примерами, сообщениями об ошибках и улучшениями документации.","Ada Demo - Swift WebAssembly Example":"Демо Ada — пример на Swift и WebAssembly","This Ada demo page lists a Swift WebAssembly example when the demo is available.":"Пример Ada на Swift и WebAssembly доступен на этой странице после публикации.","Ada Article":"Статья Ada","This Ada article page is available when the requested article has been published.":"Статья Ada будет доступна на этой странице после публикации.","Page Not Found - Ada":"Страница не найдена — Ada","This Ada page could not be found. Return to the open-source Swift game engine homepage.":"Страница Ada не найдена. Вернитесь на главную страницу игрового движка на Swift с открытым кодом.","Ada News":"Новости Ada","Ada WebAssembly Demo":"Демо Ada на WebAssembly","View the Swift source and run the WebAssembly build for this Ada demo.":"Изучите исходный код на Swift и запустите это демо Ada на WebAssembly.",Games:wa,Input:va,Scene:Aa,UI:Sa,"Bunnies Stress Example":"Нагрузочный тест с кроликами","A bunny stress test scene similar to bevymark.":"Нагрузочный тест с кроликами по аналогии с bevymark.","Custom Material Example":"Собственный материал","Lighting 2D Example":"Освещение в 2D","Many Sprites Example":"Множество спрайтов","System for rotating and translating the camera":"Система поворота и перемещения камеры","Sprite Example":"Спрайт","Text 2D Example":"Текст в 2D","Transform Ent Children Example":"Трансформации дочерних сущностей","Transparency Example":"Прозрачность","WGSL Example":"Шейдеры WGSL","Simple Cube Example":"Простой куб","Simple Collide Event Example":"События столкновений","short hand of sending event or use `sender.send(OnCollide...)`":"Сокращённая отправка события или вызов `sender.send(OnCollide...)`","Snowman Attacks Example":"Атака снеговиков","Gamepad Example":"Геймпад","Custom Tile Map Example":"Собственная тайловая карта","Ldtk Tilemap Example":"Тайловая карта LDtk","Load Scene Example":"Загрузка сцены","Scriptable Component Example":"Скриптовый компонент","Animated Text Renderer Example":"Анимированный текст","Button Example":"Кнопка","Kanban Board Example":"Канбан-доска","Native View Example":"Нативное представление","Scene View Example":"Представление сцены","Text Field Example":"Текстовое поле","UITest Scene Example":"Тестовая сцена UI","A 2D AdaEngine demo built from CustomMaterialExample.":"Пример Ada: собственный материал.","A 2D AdaEngine demo built from Lighting2DExample.":"Пример Ada: освещение в 2d.","A 2D AdaEngine demo built from SpriteExample.":"Пример Ada: спрайт.","A 2D AdaEngine demo built from Text2dExample.":"Пример Ada: текст в 2d.","A 2D AdaEngine demo built from TransformEntChildrenExample.":"Пример Ada: трансформации дочерних сущностей.","A 2D AdaEngine demo built from TransparencyExample.":"Пример Ada: прозрачность.","A 2D AdaEngine demo built from WGSLExample.":"Пример Ada: шейдеры wgsl.","A 3D AdaEngine demo built from SimpleCubeExample.":"Пример Ada: простой куб.","A Games AdaEngine demo built from SnowmanAttacksExample.":"Пример Ada: атака снеговиков.","A Input AdaEngine demo built from GamepadExample.":"Пример Ada: геймпад.","A Scene AdaEngine demo built from CustomTileMapExample.":"Пример Ada: собственная тайловая карта.","A Scene AdaEngine demo built from LdtkTilemapExample.":"Пример Ada: тайловая карта ldtk.","A Scene AdaEngine demo built from LoadSceneExample.":"Пример Ada: загрузка сцены.","A Scene AdaEngine demo built from ScriptableComponentExample.":"Пример Ada: скриптовый компонент.","A UI AdaEngine demo built from AnimatedTextRendererExample.":"Пример Ada: анимированный текст.","A UI AdaEngine demo built from ButtonExample.":"Пример Ada: кнопка.","A UI AdaEngine demo built from KanbanBoardExample.":"Пример Ada: канбан-доска.","A UI AdaEngine demo built from NativeViewExample.":"Пример Ada: нативное представление.","A UI AdaEngine demo built from SceneViewExample.":"Пример Ada: представление сцены.","A UI AdaEngine demo built from TextFieldExample.":"Пример Ada: текстовое поле.","A UI AdaEngine demo built from UITestSceneExample.":"Пример Ada: тестовая сцена ui.",Engine:Ea,read:ka,"Embedded demo":"Интерактивное демо",Avatar:xa,"GitHub stars":"звёзд на GitHub","Cloud Services will open soon.":"Облачные сервисы скоро откроются.","Cloud Services are launching in selected countries first. You can create an account now. Payments, settings sync and publishing will become available when we launch in your region.":"Сервисы Cloud сначала появятся в отдельных странах. Аккаунт можно создать уже сейчас. Оплата, синхронизация настроек и публикация станут доступны после запуска в вашем регионе.","Cloud is temporarily unavailable. Please try again.":"Cloud временно недоступен. Попробуйте ещё раз.","Request failed ({0})":"Не удалось выполнить запрос ({0})"," Try again in {0} min.":" Попробуйте ещё раз через {0} мин.","Please accept the Terms of Use before continuing.":"Примите условия использования, чтобы продолжить.","Code sent. Check your email.":"Код отправлен. Проверьте почту.","Sign in with Apple":"Войти через Apple","Sign in with Google":"Войти через Google","Link another sign-in method":"Добавить способ входа","Sign in to Ada Editor":"Войти в Ada Editor","Sign in to Ada":"Войти в Ada","Return to Ada Store →":"Вернуться в Ada Store →","Only existing organization operators can sign in.":"Войти могут только существующие операторы организации.","This test environment is invite-only. Ask an administrator to grant access to your account ID or email.":"Тестовое окружение доступно по приглашению. Попросите администратора выдать доступ вашему аккаунту или почте.","Your editor settings and shared games, in one account.":"Настройки редактора и опубликованные игры в одном аккаунте.","Create your Ada account. Cloud Services will open soon in your region.":"Создайте аккаунт Ada. Сервисы Cloud скоро появятся в вашем регионе.","or continue with email":"или используйте почту","I agree to the {0}":"Я принимаю {0}","Terms of Use":"Условия использования","How we handle personal data: {0} · {1}":"Как мы обрабатываем персональные данные: {0} · {1}","Privacy Policy":"Политика конфиденциальности","GDPR rights":"Права по GDPR","Draft legal documents — preview only, not yet effective.":"Юридические документы пока являются проектом и ещё не вступили в силу.","OTP Code":"Одноразовый код","Verify code":"Подтвердить код","Enter the code sent to {0}.":"Введите код, отправленный на {0}.","Change email":"Изменить почту",Email:Ta,"Send code":"Отправить код","Continue to Ada Editor":"Продолжить в Ada Editor","Sign in to the editor as {0}.":"Войти в редактор как {0}.","your Ada account":"вашу учётную запись Ada","Unexpected editor callback":"Неожиданный ответ редактора","Return to Ada Editor":"Вернуться в Ada Editor","Your browser will return you to the editor. If it does not open automatically, use the link below.":"Браузер вернёт вас в редактор. Если он не откроется автоматически, воспользуйтесь ссылкой ниже.","Use another account":"Использовать другой аккаунт",Cancel:Ia,"Your account":"Ваш аккаунт","Display name":"Отображаемое имя","Save name":"Сохранить название",Saved:Ca,"Copy account ID":"Скопировать ID аккаунта","Account ID copied.":"ID аккаунта скопирован.","Account ID":"ID аккаунта","Ada Pro":"Ada Pro",Free:$a,"Paid access until {0}":"Оплаченный доступ до {0}","Sync your editor settings for free. Pro adds web build publishing.":"Синхронизация настроек редактора бесплатна. Pro добавляет публикацию веб-сборок.","Pro: one active build per project · five uploads per day · 10 GB game traffic per month":"Pro: одна активная сборка на проект · пять загрузок в день · 10 ГБ игрового трафика в месяц","Manage App Store subscription":"Управлять подпиской App Store","Subscribe monthly":"Подписаться на месяц","Web payments are not available yet. App Store purchases are managed in Ada Editor.":"Веб-оплата пока недоступна. Покупками App Store можно управлять в Ada Editor.","Editor settings":"Настройки редактора","Show synced settings":"Показать синхронизированные настройки","Existing subscription":"Действующая подписка","Devices and account access":"Устройства и доступ к аккаунту","Signed in {0}":"Вход: {0}",Revoke:_a,"Sign out on all devices":"Выйти на всех устройствах","Delete account":"Удалить аккаунт","Delete your account, synced settings and game publications? Subscription cancellation is managed separately with your payment provider.":"Удалить аккаунт, синхронизированные настройки и опубликованные игры? Подписку нужно отменить отдельно у платёжного провайдера.","Upload a new version":"Загрузить новую версию","Web game ZIP or AdaScript game package · 300 MB maximum":"ZIP веб-игры или пакет AdaScript · не более 300 МБ","Game package ZIP":"ZIP-пакет игры",Visibility:Da,"Permanent game · reviewed before publishing":"Постоянная игра · проверка перед публикацией","Secret link · 48 hours":"Секретная ссылка · 48 часов","Temporary catalog test · 96 hours":"Временный тест в каталоге · 96 часов","Upload progress":"Ход загрузки","Upload new build":"Загрузить новую сборку","Select a ZIP up to 300 MB.":"Выберите ZIP размером до 300 МБ.","Upload failed. Retry to reuse this upload.":"Не удалось загрузить файл. Повторите попытку, чтобы продолжить ту же загрузку.","Upload interrupted. Retry to reuse this upload.":"Загрузка прервана. Повторите попытку, чтобы продолжить ту же загрузку.","Checking the archive and preparing your game…":"Проверяем архив и готовим игру…","Build is not ready yet. You can retry this upload.":"Сборка пока не готова. Можно повторить загрузку.","Version submitted for review. Your approved version stays available while this one is checked.":"Версия отправлена на проверку. Пока идёт проверка, одобренная версия остаётся доступной.","Build published. Replacing a temporary build keeps its link and expiry time.":"Сборка опубликована. При замене временной сборки ссылка и срок её действия сохраняются.","Publishing requires an active Pro subscription.":"Для публикации нужна действующая подписка Pro.","Game title":"Название игры",Description:Ma,"Tags, separated by commas":"Теги через запятую","Cover image":"Обложка","Screenshots — up to five":"Скриншоты — до пяти","NEW GAME PAGE":"НОВАЯ СТРАНИЦА ИГРЫ","Create a game page":"Создать страницу игры","Add its catalog details now. You can upload a playable build after the project is created.":"Заполните данные для каталога. Готовую сборку можно загрузить после создания страницы.","Create game page":"Создать страницу игры","Choose a cover and up to five screenshots, each no larger than 5 MB.":"Выберите обложку и до пяти скриншотов размером не более 5 МБ каждый.","Game pages: {0}":"Страниц игр: {0}","New game page":"Новая страница игры","Build active":"Сборка активна","No active build":"Активной сборки нет","No game pages yet. Create one to upload your first public build.":"Страниц игр пока нет. Создайте страницу, чтобы загрузить первую публичную сборку.",PROJECT:Ra,"Delete game page":"Удалить страницу игры","Current build":"Текущая сборка","Permanent game · version {0}":"Постоянная игра · версия {0}","Game catalog test":"Тест в каталоге игр","Secret link":"Секретная ссылка","Available until you unpublish it":"Доступна, пока вы не снимете её с публикации","Available until {0}":"Доступна до {0}","Play in Ada Studio ↗":"Играть в Ada Studio ↗","Open build ↗":"Открыть сборку ↗",Game:Pa,"Unpublish game":"Снять игру с публикации","Delete current build":"Удалить текущую сборку","Delete the current build? The public link will stop working immediately.":"Удалить текущую сборку? Публичная ссылка сразу перестанет работать.","No active build. Upload a ZIP to create one.":"Активной сборки нет. Загрузите ZIP, чтобы создать её.","New uploads are not available in your region yet. You can still delete this project or its current build.":"Новые загрузки пока недоступны в вашем регионе. Вы можете удалить проект или его текущую сборку.",PUBLICATIONS:La,"Create your first game page":"Создайте первую страницу игры","Each game page keeps its catalog details and public releases.":"Страница игры хранит данные для каталога и опубликованные версии.","Previous builds":"Предыдущие сборки","These builds were published before projects were introduced. You can keep using or delete them.":"Эти сборки опубликованы до появления проектов. Вы можете продолжить пользоваться ими или удалить их.","Play in Ada Studio":"Играть в Ada Studio","Open build":"Открыть сборку","Delete build":"Удалить сборку","Permanent versions":"Постоянные версии","Only approved versions can go live. You can restore a previous approved version.":"Публиковать можно только одобренные версии. Вы можете вернуть предыдущую одобренную версию.","Version {0} · {1}":"Версия {0} · {1}",live:Na,"awaiting review":"на проверке",approved:Oa,rejected:Ba,"Created {0}":"Создано {0}","Create preview link":"Создать ссылку предпросмотра","Play preview in Ada Studio ↗":"Открыть предпросмотр в Ada Studio ↗","Open preview ↗":"Открыть предпросмотр ↗","Game preview":"Предпросмотр игры","This unlisted preview link expires in 10 minutes. Share it only with reviewers.":"Непубличная ссылка предпросмотра действует 10 минут. Передавайте её только проверяющим.","Make this version live":"Опубликовать эту версию","Remove version":"Удалить версию","Remove this version and unpublish the game?":"Удалить эту версию и снять игру с публикации?","Remove this version permanently?":"Удалить эту версию без возможности восстановления?","Administrator access required":"Нужен доступ администратора","Test environment access":"Доступ к тестовому окружению","Game versions awaiting review":"Версии игр на проверке","No versions are waiting for review.":"Версий на проверке нет.","{0} · version {1}":"{0} · версия {1}","Author: {0}":"Автор: {0}","Reason for rejection":"Причина отклонения","Create review preview":"Создать предпросмотр для проверки","Open review preview ↗":"Открыть предпросмотр для проверки ↗","Review the game and its metadata. The unlisted preview expires in 10 minutes.":"Проверьте игру и её данные. Непубличный предпросмотр доступен в течение 10 минут.","Approve and publish":"Одобрить и опубликовать","Version approved and published.":"Версия одобрена и опубликована.","Reject version":"Отклонить версию","Enter a reason so the author can fix this version.":"Укажите причину, чтобы автор мог исправить версию.","Version rejected. The author can see your reason.":"Версия отклонена. Автор увидит указанную причину.","Game reports":"Жалобы на игры","Game page":"Страница игры","Block game":"Заблокировать игру",Blocked:Ua,"Playground navigation":"Разделы Playground","Cloud navigation":"Навигация Cloud",Account:Ga,"My projects":"Мои проекты",Create:Fa,"Ada Playground":"Ada Playground",Cloud:ja,"Ada Playground — Create. Share. Play.":"Ada Playground — Создавайте. Делитесь. Играйте.","{0} · {1}":"{0} · {1}",Published:Ha,"Draft — not yet in effect":"Проект — не вступил в силу","Back to sign in":"Вернуться ко входу",Admin:Wa,"Editor sign-in is unavailable":"Вход в редактор недоступен","The request may have expired. Start sign-in again from Ada Editor.":"Срок запроса мог истечь. Начните вход заново из Ada Editor.","Go to account":"Открыть аккаунт","Cloud is temporarily unavailable":"Cloud временно недоступен","Try again":"Попробовать снова","Only invited users can sign in to this test environment. Add an existing account ID or invite a new user by email. An email invitation becomes account access after the first verified sign-in.":"В тестовое окружение могут входить только приглашённые пользователи. Добавьте ID существующего аккаунта или пригласите нового пользователя по почте. После первого подтверждённого входа приглашение станет доступом к аккаунту.","Access type":"Тип доступа","Email invitation":"Приглашение по почте","Email or account ID":"Почта или ID аккаунта","Account UUID":"UUID аккаунта","Grant access":"Выдать доступ","Refresh access list":"Обновить список доступа","Allowed users and pending invitations":"Пользователи с доступом и ожидающие приглашения","No invitations or user grants. Only configured administrators can sign in.":"Приглашений и выданных доступов нет. Войти могут только администраторы из конфигурации.","{0}: {1}":"{0}: {1}","Revoke access":"Отозвать доступ","Configured administrator":"Администратор из конфигурации","Access revoked. New sign-ins and session renewals are blocked; existing access tokens expire within 15 minutes.":"Доступ отозван. Новый вход и продление сессий заблокированы; выданные токены перестанут действовать в течение 15 минут.","Could not revoke access":"Не удалось отозвать доступ","Administrators: {0}. Administrator access is configured by the server operator.":"Администраторы: {0}. Их доступ настраивает оператор сервера.",None:qa,"Access granted.":"Доступ выдан.","Could not grant access":"Не удалось выдать доступ","Could not load access list":"Не удалось загрузить список доступа","Request failed":"Не удалось выполнить запрос","2D art":"2D-графика","3D models":"3D-модели",Textures:za,Materials:Va,Audio:Ka,Animations:Ya,Scripts:Za,Templates:Xa,"UI kits":"UI-наборы",Tools:Ja,"Store API is unavailable. Please try again later.":"Магазин недоступен. Попробуйте позже.","Store unavailable ({0}). Please try again.":"Магазин недоступен ({0}). Попробуйте ещё раз.","Ada Store · Free assets for your next game":"Ada Store · Бесплатные ресурсы для вашей следующей игры","Store navigation":"Навигация по магазину","Community assets":"Ресурсы сообщества","Free assets for your next game.":"Бесплатные ресурсы для вашей следующей игры.","Discover models, textures, sounds and scripts from the Ada community. Download them for free and bring them into Ada Studio.":"Модели, текстуры, звуки и скрипты от сообщества Ada. Скачивайте бесплатно и используйте в Ada Studio.","Share an asset":"Поделиться ресурсом","Free to download. Open to everyone.":"Бесплатно. Доступно каждому.","Search models, sounds, scripts…":"Найти модели, звуки, скрипты…","Search assets":"Поиск ресурсов","Sort assets":"Сортировка ресурсов","Most downloaded":"Популярные","Highest rated":"С высоким рейтингом","Recently added":"Недавно добавленные","Asset categories":"Категории ресурсов","Explore the store":"Каталог ресурсов","Load more":"Показать ещё","Made by creators. Shared with the community.":"Создано авторами. Доступно сообществу.","Ada Studio ↗":"Ada Studio ↗","Your Cloud account ↗":"Ваш аккаунт Cloud ↗","My assets":"Мои ресурсы","Sign in":"Войти",FREE:Qa,"No ratings yet":"Пока без оценок","Loading assets…":"Загрузка ресурсов…","{0} assets":"Ресурсов: {0}","No assets match your search. Try another category or search term.":"Ничего не найдено. Попробуйте другую категорию или поисковый запрос.","The shelves are ready for your first creation. Share an asset to get the community started.":"Здесь появятся ваши работы. Поделитесь первым ресурсом с сообществом.","The store could not be loaded.":"Не удалось загрузить магазин.","All assets":"Все ресурсы","Close ×":"Закрыть ×","Asset details":"Информация о ресурсе","Loading…":"Загрузка…","View image for {0}":"Изображение ресурса «{0}»","{0} reviews · ↓ {1} downloads":"Отзывов: {0} · ↓ Скачиваний: {1}","Download ZIP ↓":"Скачать ZIP ↓","Open in Ada Studio ↗":"Открыть в Ada Studio ↗",Permalink:ei,"Community reviews":"Отзывы сообщества","Be the first to leave a review.":"Оставьте первый отзыв.",Rating:ni,"{0} stars":"Оценка: {0}","How did this asset work in your project?":"Как этот ресурс проявил себя в вашем проекте?","Your review":"Ваш отзыв","Post / update my review":"Опубликовать / обновить мой отзыв","Remove my review":"Удалить мой отзыв","Review saved.":"Отзыв сохранён.","Review failed":"Не удалось сохранить отзыв","Sign in to leave a review →":"Войдите, чтобы оставить отзыв →","Asset unavailable":"Ресурс недоступен","Your assets":"Ваши ресурсы","You have not shared an asset yet.":"Вы пока не поделились ни одним ресурсом."," · Blocked":" · Заблокирован",Edit:ti,Delete:ai,"Delete “{0}” from the store?":"Удалить «{0}» из магазина?","Could not load your assets":"Не удалось загрузить ваши ресурсы","Edit asset":"Изменить ресурс","Share your creation":"Поделитесь своей работой","A preview + up to 8 gallery images, 5 MB each. JPEG, PNG or WebP. ZIP archive up to 300 MB.":"Превью и до 8 изображений галереи, по 5 МБ каждое. JPEG, PNG или WebP. ZIP-архив до 300 МБ.","Asset name":"Название ресурса","Author display name":"Отображаемое имя автора","Author name":"Имя автора",Version:ii,Category:si,"Tags (comma separated, up to 8)":"Теги через запятую, не больше 8","Replace preview (optional)":"Заменить превью (необязательно)","Preview image":"Изображение превью","Replace gallery (optional)":"Заменить галерею (необязательно)","Gallery images":"Изображения галереи","New ZIP version (optional)":"Новая версия ZIP (необязательно)","Asset ZIP":"ZIP-архив ресурса","I own these assets or have permission to distribute them under the selected license.":"Я владею этими ресурсами или имею право распространять их под выбранной лицензией.","Save changes":"Сохранить изменения","Publish free asset":"Опубликовать бесплатный ресурс","Maximum 8 gallery images.":"Не больше 8 изображений в галерее.","Images must be JPEG, PNG or WebP up to 5 MB.":"Изображения должны быть в формате JPEG, PNG или WebP, не больше 5 МБ.","ZIP must be between 1 byte and 300 MB.":"Размер ZIP-архива должен быть от 1 байта до 300 МБ.","Use up to 8 tags of 30 bytes each.":"Укажите не больше 8 тегов, до 30 байт каждый.","{0} is required and must fit within {1} UTF-8 bytes.":"Поле «{0}» обязательно и должно занимать не больше {1} байт в UTF-8.","Uploading images…":"Загрузка изображений…","Uploading archive…":"Загрузка архива…","Archive upload failed. Please try again.":"Не удалось загрузить архив. Попробуйте ещё раз.","Checking archive…":"Проверка архива…","Changes saved.":"Изменения сохранены.","Your asset is live in the store.":"Ваш ресурс опубликован в магазине.","Publishing failed":"Не удалось опубликовать ресурс","The store is temporarily unavailable.":"Магазин временно недоступен.","Create a project":"Создать проект","Public games":"Открытые игры","Games published to the catalog will appear here. Secret test links are not listed.":"Здесь появятся опубликованные игры. Закрытые тестовые ссылки в каталог не попадают.","Play game ↗":"Играть ↗","Version {0} · reviewed":"Версия {0} · проверена","Test ends {0}":"Тест завершится {0}","This test has ended. The game page remains available.":"Этот тест завершён. Страница игры остаётся доступной.","{0} likes":"Отметок «Нравится»: {0}",Like:oi,"Remove like":"Убрать отметку","Like removed":"Отметка удалена","Describe the problem with this game":"Опишите проблему с этой игрой",Report:ri,"Report sent":"Жалоба отправлена","My Projects":"Мои проекты","Game catalog":"Каталог игр","I agree to the ":"Я принимаю ","How we handle personal data: ":"Как мы обрабатываем персональные данные: ","Web build ZIP":"ZIP веб-сборки","Create project":"Создать проект","New project":"Новый проект","No projects yet. Create one to upload your first web build.":"Проектов пока нет. Создайте проект, чтобы загрузить первую веб-сборку.","Delete project":"Удалить проект","Delete “{0}” and all its versions? This cannot be undone.":"Удалить «{0}» и все его версии? Это действие нельзя отменить.","Create your first project":"Создайте первый проект","Each project keeps its own catalog details and current playable build.":"У каждого проекта свои данные каталога и текущая игровая сборка."},Yn="ada-site-language",fn=["en","ru"];let bn="en";function yn(e){return/^\/ru(?:\/|$)/.test(e)?"ru":"en"}function ye(e){return e.replace(/^\/ru(?=\/|$)/,"")||"/"}function pe(e,n){const t=e.search(/[?#]/);if(t>=0)return pe(e.slice(0,t)||"/",n)+e.slice(t);const i=ye(e);return n==="en"?i:`/ru${i==="/"?"":i}`}function rr(e,...n){return a(e).replace(/\{(\d+)\}/g,(t,i)=>String(n[Number(i)]??""))}function cr(e,n,t){const i=pe(e,n);if(t!=="en"&&t!=="ru")return i;const o=new URL(i,"https://ada.invalid");return o.searchParams.set("lang",n),`${o.pathname}${o.search}${o.hash}`}function li(e){for(const n of e){const t=n.toLowerCase().split(/[-_]/)[0];if(t==="ru"||t==="en")return t}return"en"}function di(e,n,t){return yn(e)==="ru"?"ru":n==="en"||n==="ru"?n:li(t)}function Z(){return bn}function ui(e){bn=e}function a(e,n=bn){return n==="ru"?ci[e]??e:e}function pi(){try{return window.localStorage.getItem(Yn)}catch{return null}}function mi(e){try{return window.localStorage.setItem(Yn,e),!0}catch{return!1}}function Zn(e){const n=e.trim().replace(/\/$/,"");return!n||n==="."||n==="/"?"":n.startsWith("/")?n:`/${n}`}function wn(e,n){const t=Zn(n);let i=e||"/";return i.startsWith("/")||(i=`/${i}`),t&&(i===t||i.startsWith(`${t}/`))&&(i=i.slice(t.length)||"/"),i=i.replace(/\/$/,"")||"/",i.startsWith("/")?i:`/${i}`}function vn(e,n){const t=Zn(n),i=e.startsWith("/")?e:`/${e}`;return t?`${t}${i==="/"?"/":i}`:i}const hi=["learn","community","donate"];function Xn(e,n){const t=ye(wn(e,n));if(t==="/")return{name:"home"};if(t==="/download")return{name:"download"};if(t==="/studio")return{name:"studio"};if(t==="/blog")return{name:"blog"};if(t==="/demos")return{name:"demos"};const i=t.match(/^\/demos\/([^/]+)$/);if(i)return{name:"demo",slug:decodeURIComponent(i[1])};const o=hi.find(s=>t===`/${s}`);if(o)return{name:"static-page",page:o};const c=t.match(/^\/articles\/([^/]+)$/);return c?{name:"article",slug:decodeURIComponent(c[1])}:{name:"not-found",path:t}}function gi(){return`<div class="footer-language">
    <label for="site-language" title="${a("Language")}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg>
    </label>
    <span class="footer-language-control">
      <select id="site-language" aria-label="${a("Language")}" data-site-language>
        ${fn.map(e=>`<option value="${e}" lang="${e}"${Z()===e?" selected":""}>${e==="en"?"English":"Русский"}</option>`).join("")}
      </select>
    </span>
  </div>`}function fi(e="/"){document.querySelectorAll("[data-site-language]").forEach(n=>{n.dataset.languageReady||(n.dataset.languageReady="true",n.addEventListener("change",()=>{const t=n.value;if(!fn.includes(t))return;const i=new URL(window.location.href);i.pathname=vn(pe(wn(i.pathname,e),t),e),mi(t)?i.searchParams.delete("lang"):i.searchParams.set("lang",t),window.location.assign(i.href)}))})}const mn="https://apps.apple.com/app/id6809145006",ce={version:"1.0.0",url:"https://github.com/AdaEngine/Ada/releases/tag/editor-v1.0.0-20261013",assets:[{name:"AdaEngine-1.0.0-20261013-macOS.zip",url:"https://github.com/AdaEngine/Ada/releases/download/editor-v1.0.0-20261013/AdaEngine-1.0.0-20261013-macOS.zip"}]};function _n(e){if(typeof e=="string")try{const n=new URL(e);return n.protocol==="https:"&&n.hostname==="github.com"&&!n.username&&!n.password&&["/AdaEngine/Ada/releases/","/AdaEngine/AdaEngine/releases/"].some(t=>n.pathname.startsWith(t))?n.href:void 0}catch{return}}function bi(e){var s;if(!e||typeof e!="object")return;const n=e,t=_n(n.html_url);if(n.draft||n.prerelease||typeof n.tag_name!="string"||!t)return;const o=((s=n.tag_name.match(/^editor-v(\d+\.\d+(?:\.\d+)?)-\d+$/))==null?void 0:s[1])??n.tag_name.replace(/^(?:editor-)?v/,"");if(!/^\d+\.\d+(?:\.\d+)?(?:[-.][a-zA-Z0-9]+)*$/.test(o))return;const c=[];if(Array.isArray(n.assets))for(const r of n.assets){if(!r||typeof r!="object")continue;const l=_n(r.browser_download_url);typeof r.name=="string"&&l&&c.push({name:r.name,url:l})}return{version:o,url:t,assets:c}}function Jn(e,n){return n.assets.filter(({name:t})=>/\.(?:sha\d*|sig|asc|blockmap)$/i.test(t)?!1:e==="windows"?/\.(?:exe|msi)$/i.test(t)||/(?:windows|win32|win64).*\.zip$/i.test(t):e==="macos"?/\.(?:dmg|pkg)$/i.test(t)||/(?:macos|mac|darwin|osx).*\.zip$/i.test(t):/\.appimage$/i.test(t)||/linux.*\.(?:zip|tar\.gz|tar\.xz|deb|rpm)$/i.test(t))}function yi(e){return/(?:arm64|aarch64|apple-silicon)/i.test(e.name)?"Download · ARM64":/(?:x86_64|amd64|x64|intel)/i.test(e.name)?"Download · Intel / AMD":"Download"}function wi(e){if(!Array.isArray(e))return ce;const n=e.map(bi).filter(t=>t!==void 0);return n.find(t=>["macos","windows","linux"].some(i=>Jn(i,t).length>0))??(ce.assets.length?ce:n[0]??ce)}async function vi(){try{const e=await fetch("https://api.github.com/repos/AdaEngine/Ada/releases?per_page=20",{headers:{Accept:"application/vnd.github+json"},signal:AbortSignal.timeout(5e3)});if(!e.ok)return ce;const n=await e.json();return wi(n)}catch{}return ce}function V(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{desktop:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 21h8m-4-5v5"/>',phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',scene:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',code:'<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18"/>',agent:'<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>'}[e]}</svg>`}function Ai(e,n){return`
    <main class="studio-page">
      <section class="studio-hero container content-restriction" aria-labelledby="studio-title">
        <p class="studio-eyebrow"><img src="${n("images/ae_logo~dark.svg")}" alt="" width="22" height="22" /> Ada Studio</p>
        <h1 id="studio-title">${a("Your next game.")}<br /><span>${a("Starts here.")}</span></h1>
        <p class="studio-lead">${a("A home for your ideas, scenes, and code.")}<br class="studio-desktop-break" /> ${a("Create with Ada on your desktop, iPad, or phone.")}</p>
        <nav class="studio-platform-links" aria-label="${a("Explore Ada Studio platforms")}">
          <a href="#desktop-ipad">${V("desktop")}<span>${a("Desktop / iPad")}</span>${V("arrow")}</a>
          <a href="#mobile">${V("phone")}<span>${a("Mobile")}</span>${V("arrow")}</a>
        </nav>
        <figure class="studio-hero-media">
          <div class="studio-editor-frame">
            <img src="${n("images/studio/desktop-device.png")}" alt="${a("Ada Studio desktop scene workspace, entity hierarchy, and component inspector in a MacBook frame")}" width="1662" height="848" fetchpriority="high" />
          </div>
          <div class="studio-hero-phone studio-phone-frame">
            <img src="${n("images/studio/mobile-projects-device.png")}" alt="${a("Ada Studio mobile project library with a Medieval Arena preview in an iPhone frame")}" width="851" height="1849" />
          </div>
          <figcaption><span>${a("More room to build. More ways to create.")}</span><span>${a("Powered by Ada")}</span></figcaption>
        </figure>
      </section>

      <section id="desktop-ipad" class="studio-section container content-restriction" aria-labelledby="studio-desktop-title">
        <div class="studio-section-heading">
          <p class="studio-eyebrow">${V("desktop")} ${a("Desktop / iPad")}</p>
          <h2 id="studio-desktop-title">${a("Space for your")}<br /><span>${a("big ideas.")}</span></h2>
          <p>${a("A focused workspace for the whole picture. Shape your scene, find the right file, and keep your code close to the world you’re building.")}</p>
          <div class="studio-actions">
            <a class="studio-button studio-button-primary" href="${e("/download")}">${a("Get Ada Studio")} ${V("arrow")}</a>
            <a class="studio-text-link" href="${mn}">${a("Get it for iPad")} ${V("arrow")}</a>
          </div>
        </div>
        <div class="studio-workspace-grid">
          <article class="studio-scene-card">
            <div class="studio-card-copy"><span class="studio-feature-icon">${V("scene")}</span><h3>${a("Build a world. Make it yours.")}</h3><p>${a("Work with scenes, entities, and components. Turn a collection of assets into the start of something playable.")}</p></div>
            <div class="studio-scene-art"><img src="${n("images/studio/skeletal-garden.png")}" alt="${a("Skeletal Garden: animated robots, textured props, and a wooded landscape rendered by AdaEngine")}" width="2200" height="1520" loading="lazy" /></div>
            <span class="studio-media-label">${a("Skeletal Garden · Made with Ada")}</span>
          </article>
          <div class="studio-workspace-details">
            <article class="studio-code-card">
              <div class="studio-card-copy"><span class="studio-feature-icon">${V("code")}</span><h3>${a("Your code. Your creative flow.")}</h3><p>${a("Write in Swift and AdaScript. Keep gameplay logic, project files, and tools together.")}</p></div>
              <div class="studio-file-tabs" aria-hidden="true"><span>Player.swift</span><span>game.ada</span></div>
              <pre class="studio-code-sample" aria-label="${a("Swift component example")}"><code><span class="studio-code-purple">@Component</span>
<span class="studio-code-blue">struct</span> Player {
    <span class="studio-code-blue">var</span> speed: <span class="studio-code-mint">Float</span> = <span class="studio-code-peach">240</span>
}</code></pre>
            </article>
            <article class="studio-agent-card"><span class="studio-feature-icon">${V("agent")}</span><div><h3>${a("A little help. A lot of possibility.")}</h3><p>${a("Work with an AI agent inside your project. Explore an idea, ask about code, and shape your next change.")}</p></div></article>
          </div>
        </div>
        <div class="studio-ipad-note">${V("desktop")}<p><strong>${a("A bigger canvas. A familiar workspace.")}</strong> ${a("Desktop and iPad put your project at the center, with room for scenes, code, and the tools around them.")}</p></div>
      </section>

      <section id="mobile" class="studio-section studio-mobile-section container content-restriction" aria-labelledby="studio-mobile-title">
        <div class="studio-mobile-copy">
          <p class="studio-eyebrow">${V("phone")} ${a("Mobile")}</p>
          <h2 id="studio-mobile-title">${a("Small screen.")}<br /><span>${a("Big imagination.")}</span></h2>
          <p class="studio-section-lead">${a("An idea can happen anywhere. Give it a place to grow, right on your phone.")}</p>
          <ol class="studio-mobile-steps">
            <li><span>01</span><div><h3>${a("Start with an idea.")}</h3><p>${a("Describe the game you have in mind. Work with an agent to build it into an Ada project.")}</p></div></li>
            <li><span>02</span><div><h3>${a("Go from build to play.")}</h3><p>${a("Open your game on the same device. Try it, feel it, and find your next idea.")}</p></div></li>
            <li><span>03</span><div><h3>${a("Show what you mean.")}</h3><p>${a("Capture a game frame, mark the part you want to change, and send your feedback to the agent.")}</p></div></li>
          </ol>
          <a class="studio-button studio-button-primary" href="${mn}">${a("Get Ada for iPhone")} ${V("arrow")}</a>
        </div>
        <figure class="studio-mobile-media">
          <div class="studio-phone-pair">
            <div class="studio-phone-frame studio-phone-build"><img src="${n("images/studio/mobile-build-device.png")}" alt="${a("Ada Studio Mobile Build workspace for Medieval Arena in an iPhone frame")}" width="851" height="1849" loading="lazy" /><span class="studio-phone-caption">${a("Build")}</span></div>
            <div class="studio-phone-frame studio-phone-play"><img src="${n("images/studio/mobile-play-device.png")}" alt="${a("Medieval Arena running in Ada Studio Mobile Play in an iPhone frame")}" width="851" height="1849" loading="lazy" /><span class="studio-phone-caption">${a("Play")}</span></div>
          </div>
          <figcaption>${a("Build and Play in Ada Studio Mobile")}</figcaption>
        </figure>
      </section>

      <section class="studio-final container content-restriction" aria-labelledby="studio-final-title">
        <div class="studio-final-inner">
          <img class="studio-final-logo" src="${n("images/ae_logo~dark.svg")}" alt="" width="64" height="64" loading="lazy" />
          <p class="studio-eyebrow">${a("Make something only you could make.")}</p>
          <h2 id="studio-final-title">${a("An idea is a great start.")}<br />${a("Let’s make it a game.")}</h2>
          <div class="studio-actions">
            <a class="studio-button studio-button-primary" href="${e("/download")}">${a("Get Ada Studio")} ${V("arrow")}</a>
            <a class="studio-button studio-button-secondary" href="${e("/demos")}">${a("Explore Ada demos")} ${V("arrow")}</a>
          </div>
          <a class="studio-source-link" href="https://github.com/AdaEngine/AdaEngine/tree/main/Editor">${a("Explore the editor on GitHub ↗")}</a>
        </div>
      </section>
    </main>
  `}function Si(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Qn(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],i=typeof t;(i==="object"||i==="function")&&!Object.isFrozen(t)&&Qn(t)}),e}class Dn{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function et(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function we(e,...n){const t=Object.create(null);for(const i in e)t[i]=e[i];return n.forEach(function(i){for(const o in i)t[o]=i[o]}),t}const Ei="</span>",Mn=e=>!!e.scope,ki=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((i,o)=>`${i}${"_".repeat(o+1)}`)].join(" ")}return`${n}${e}`};class xi{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=et(n)}openNode(n){if(!Mn(n))return;const t=ki(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){Mn(n)&&(this.buffer+=Ei)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const Rn=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class An{constructor(){this.rootNode=Rn(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=Rn({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(i=>this._walk(n,i)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{An._collapse(t)}))}}class Ti extends An{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const i=n.root;t&&(i.scope=`language:${t}`),this.add(i)}toHTML(){return new xi(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ne(e){return e?typeof e=="string"?e:e.source:null}function nt(e){return Te("(?=",e,")")}function Ii(e){return Te("(?:",e,")*")}function Ci(e){return Te("(?:",e,")?")}function Te(...e){return e.map(t=>Ne(t)).join("")}function $i(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Sn(...e){return"("+($i(e).capture?"":"?:")+e.map(i=>Ne(i)).join("|")+")"}function tt(e){return new RegExp(e.toString()+"|").exec("").length-1}function _i(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Di=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function En(e,{joinWith:n}){let t=0;return e.map(i=>{t+=1;const o=t;let c=Ne(i),s="";for(;c.length>0;){const r=Di.exec(c);if(!r){s+=c;break}s+=c.substring(0,r.index),c=c.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?s+="\\"+String(Number(r[1])+o):(s+=r[0],r[0]==="("&&t++)}return s}).map(i=>`(${i})`).join(n)}const Mi=/\b\B/,at="[a-zA-Z]\\w*",kn="[a-zA-Z_]\\w*",it="\\b\\d+(\\.\\d+)?",st="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ot="\\b(0b[01]+)",Ri="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Pi=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=Te(n,/.*\b/,e.binary,/\b.*/)),we({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,i)=>{t.index!==0&&i.ignoreMatch()}},e)},Oe={begin:"\\\\[\\s\\S]",relevance:0},Li={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Oe]},Ni={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Oe]},Oi={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Xe=function(e,n,t={}){const i=we({scope:"comment",begin:e,end:n,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=Sn("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:Te(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},Bi=Xe("//","$"),Ui=Xe("/\\*","\\*/"),Gi=Xe("#","$"),Fi={scope:"number",begin:it,relevance:0},ji={scope:"number",begin:st,relevance:0},Hi={scope:"number",begin:ot,relevance:0},Wi={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Oe,{begin:/\[/,end:/\]/,relevance:0,contains:[Oe]}]},qi={scope:"title",begin:at,relevance:0},zi={scope:"title",begin:kn,relevance:0},Vi={begin:"\\.\\s*"+kn,relevance:0},Ki=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var He=Object.freeze({__proto__:null,APOS_STRING_MODE:Li,BACKSLASH_ESCAPE:Oe,BINARY_NUMBER_MODE:Hi,BINARY_NUMBER_RE:ot,COMMENT:Xe,C_BLOCK_COMMENT_MODE:Ui,C_LINE_COMMENT_MODE:Bi,C_NUMBER_MODE:ji,C_NUMBER_RE:st,END_SAME_AS_BEGIN:Ki,HASH_COMMENT_MODE:Gi,IDENT_RE:at,MATCH_NOTHING_RE:Mi,METHOD_GUARD:Vi,NUMBER_MODE:Fi,NUMBER_RE:it,PHRASAL_WORDS_MODE:Oi,QUOTE_STRING_MODE:Ni,REGEXP_MODE:Wi,RE_STARTERS_RE:Ri,SHEBANG:Pi,TITLE_MODE:qi,UNDERSCORE_IDENT_RE:kn,UNDERSCORE_TITLE_MODE:zi});function Yi(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function Zi(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Xi(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Yi,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Ji(e,n){Array.isArray(e.illegal)&&(e.illegal=Sn(...e.illegal))}function Qi(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function es(e,n){e.relevance===void 0&&(e.relevance=1)}const ns=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(i=>{delete e[i]}),e.keywords=t.keywords,e.begin=Te(t.beforeMatch,nt(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},ts=["of","and","for","in","not","or","if","then","parent","list","value"],as="keyword";function rt(e,n,t=as){const i=Object.create(null);return typeof e=="string"?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach(function(c){Object.assign(i,rt(e[c],n,c))}),i;function o(c,s){n&&(s=s.map(r=>r.toLowerCase())),s.forEach(function(r){const l=r.split("|");i[l[0]]=[c,is(l[0],l[1])]})}}function is(e,n){return n?Number(n):ss(e)?0:1}function ss(e){return ts.includes(e.toLowerCase())}const Pn={},ke=e=>{console.error(e)},Ln=(e,...n)=>{console.log(`WARN: ${e}`,...n)},$e=(e,n)=>{Pn[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Pn[`${e}/${n}`]=!0)},Ve=new Error;function ct(e,n,{key:t}){let i=0;const o=e[t],c={},s={};for(let r=1;r<=n.length;r++)s[r+i]=o[r],c[r+i]=!0,i+=tt(n[r-1]);e[t]=s,e[t]._emit=c,e[t]._multi=!0}function os(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ke("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ve;if(typeof e.beginScope!="object"||e.beginScope===null)throw ke("beginScope must be object"),Ve;ct(e,e.begin,{key:"beginScope"}),e.begin=En(e.begin,{joinWith:""})}}function rs(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ke("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ve;if(typeof e.endScope!="object"||e.endScope===null)throw ke("endScope must be object"),Ve;ct(e,e.end,{key:"endScope"}),e.end=En(e.end,{joinWith:""})}}function cs(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function ls(e){cs(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),os(e),rs(e)}function ds(e){function n(s,r){return new RegExp(Ne(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,r]),this.matchAt+=tt(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(l=>l[1]);this.matcherRe=n(En(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(r);if(!l)return null;const d=l.findIndex((m,y)=>y>0&&m!==void 0),u=this.matchIndexes[d];return l.splice(0,d),Object.assign(l,u)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const l=new t;return this.rules.slice(r).forEach(([d,u])=>l.addRule(d,u)),l.compile(),this.multiRegexes[r]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,l){this.rules.push([r,l]),l.type==="begin"&&this.count++}exec(r){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let d=l.exec(r);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,d=u.exec(r)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function o(s){const r=new i;return s.contains.forEach(l=>r.addRule(l.begin,{rule:l,type:"begin"})),s.terminatorEnd&&r.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&r.addRule(s.illegal,{type:"illegal"}),r}function c(s,r){const l=s;if(s.isCompiled)return l;[Zi,Qi,ls,ns].forEach(u=>u(s,r)),e.compilerExtensions.forEach(u=>u(s,r)),s.__beforeBegin=null,[Xi,Ji,es].forEach(u=>u(s,r)),s.isCompiled=!0;let d=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),d=s.keywords.$pattern,delete s.keywords.$pattern),d=d||/\w+/,s.keywords&&(s.keywords=rt(s.keywords,e.case_insensitive)),l.keywordPatternRe=n(d,!0),r&&(s.begin||(s.begin=/\B|\b/),l.beginRe=n(l.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(l.endRe=n(l.end)),l.terminatorEnd=Ne(l.end)||"",s.endsWithParent&&r.terminatorEnd&&(l.terminatorEnd+=(s.end?"|":"")+r.terminatorEnd)),s.illegal&&(l.illegalRe=n(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(u){return us(u==="self"?s:u)})),s.contains.forEach(function(u){c(u,l)}),s.starts&&c(s.starts,r),l.matcher=o(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=we(e.classNameAliases||{}),c(e)}function lt(e){return e?e.endsWithParent||lt(e.starts):!1}function us(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return we(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:lt(e)?we(e,{starts:e.starts?we(e.starts):null}):Object.isFrozen(e)?we(e):e}var ps="11.11.1";class ms extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const on=et,Nn=we,On=Symbol("nomatch"),hs=7,dt=function(e){const n=Object.create(null),t=Object.create(null),i=[];let o=!0;const c="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Ti};function l(p){return r.noHighlightRe.test(p)}function d(p){let f=p.className+" ";f+=p.parentNode?p.parentNode.className:"";const g=r.languageDetectRe.exec(f);if(g){const x=j(g[1]);return x||(Ln(c.replace("{}",g[1])),Ln("Falling back to no-highlight mode for this block.",p)),x?g[1]:"no-highlight"}return f.split(/\s+/).find(x=>l(x)||j(x))}function u(p,f,g){let x="",C="";typeof f=="object"?(x=p,g=f.ignoreIllegals,C=f.language):($e("10.7.0","highlight(lang, code, ...args) has been deprecated."),$e("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),C=p,x=f),g===void 0&&(g=!0);const O={code:x,language:C};re("before:highlight",O);const F=O.result?O.result:m(O.language,O.code,g);return F.code=O.code,re("after:highlight",F),F}function m(p,f,g,x){const C=Object.create(null);function O(h,b){return h.keywords[b]}function F(){if(!S.keywords){W.addText(B);return}let h=0;S.keywordPatternRe.lastIndex=0;let b=S.keywordPatternRe.exec(B),I="";for(;b;){I+=B.substring(h,b.index);const D=se.case_insensitive?b[0].toLowerCase():b[0],q=O(S,D);if(q){const[he,Ut]=q;if(W.addText(I),I="",C[D]=(C[D]||0)+1,C[D]<=hs&&(je+=Ut),he.startsWith("_"))I+=b[0];else{const Gt=se.classNameAliases[he]||he;ee(b[0],Gt)}}else I+=b[0];h=S.keywordPatternRe.lastIndex,b=S.keywordPatternRe.exec(B)}I+=B.substring(h),W.addText(I)}function ie(){if(B==="")return;let h=null;if(typeof S.subLanguage=="string"){if(!n[S.subLanguage]){W.addText(B);return}h=m(S.subLanguage,B,!0,Fe[S.subLanguage]),Fe[S.subLanguage]=h._top}else h=w(B,S.subLanguage.length?S.subLanguage:null);S.relevance>0&&(je+=h.relevance),W.__addSublanguage(h._emitter,h.language)}function z(){S.subLanguage!=null?ie():F(),B=""}function ee(h,b){h!==""&&(W.startScope(b),W.addText(h),W.endScope())}function Ie(h,b){let I=1;const D=b.length-1;for(;I<=D;){if(!h._emit[I]){I++;continue}const q=se.classNameAliases[h[I]]||h[I],he=b[I];q?ee(he,q):(B=he,F(),B=""),I++}}function Ue(h,b){return h.scope&&typeof h.scope=="string"&&W.openNode(se.classNameAliases[h.scope]||h.scope),h.beginScope&&(h.beginScope._wrap?(ee(B,se.classNameAliases[h.beginScope._wrap]||h.beginScope._wrap),B=""):h.beginScope._multi&&(Ie(h.beginScope,b),B="")),S=Object.create(h,{parent:{value:S}}),S}function Re(h,b,I){let D=_i(h.endRe,I);if(D){if(h["on:end"]){const q=new Dn(h);h["on:end"](b,q),q.isMatchIgnored&&(D=!1)}if(D){for(;h.endsParent&&h.parent;)h=h.parent;return h}}if(h.endsWithParent)return Re(h.parent,b,I)}function Qe(h){return S.matcher.regexIndex===0?(B+=h[0],1):(sn=!0,0)}function en(h){const b=h[0],I=h.rule,D=new Dn(I),q=[I.__beforeBegin,I["on:begin"]];for(const he of q)if(he&&(he(h,D),D.isMatchIgnored))return Qe(b);return I.skip?B+=b:(I.excludeBegin&&(B+=b),z(),!I.returnBegin&&!I.excludeBegin&&(B=b)),Ue(I,h),I.returnBegin?0:b.length}function nn(h){const b=h[0],I=f.substring(h.index),D=Re(S,h,I);if(!D)return On;const q=S;S.endScope&&S.endScope._wrap?(z(),ee(b,S.endScope._wrap)):S.endScope&&S.endScope._multi?(z(),Ie(S.endScope,h)):q.skip?B+=b:(q.returnEnd||q.excludeEnd||(B+=b),z(),q.excludeEnd&&(B=b));do S.scope&&W.closeNode(),!S.skip&&!S.subLanguage&&(je+=S.relevance),S=S.parent;while(S!==D.parent);return D.starts&&Ue(D.starts,h),q.returnEnd?0:b.length}function tn(){const h=[];for(let b=S;b!==se;b=b.parent)b.scope&&h.unshift(b.scope);h.forEach(b=>W.openNode(b))}let Ce={};function Ge(h,b){const I=b&&b[0];if(B+=h,I==null)return z(),0;if(Ce.type==="begin"&&b.type==="end"&&Ce.index===b.index&&I===""){if(B+=f.slice(b.index,b.index+1),!o){const D=new Error(`0 width match regex (${p})`);throw D.languageName=p,D.badRule=Ce.rule,D}return 1}if(Ce=b,b.type==="begin")return en(b);if(b.type==="illegal"&&!g){const D=new Error('Illegal lexeme "'+I+'" for mode "'+(S.scope||"<unnamed>")+'"');throw D.mode=S,D}else if(b.type==="end"){const D=nn(b);if(D!==On)return D}if(b.type==="illegal"&&I==="")return B+=`
`,1;if(an>1e5&&an>b.index*3)throw new Error("potential infinite loop, way more iterations than matches");return B+=I,I.length}const se=j(p);if(!se)throw ke(c.replace("{}",p)),new Error('Unknown language: "'+p+'"');const R=ds(se);let be="",S=x||R;const Fe={},W=new r.__emitter(r);tn();let B="",je=0,Ee=0,an=0,sn=!1;try{if(se.__emitTokens)se.__emitTokens(f,W);else{for(S.matcher.considerAll();;){an++,sn?sn=!1:S.matcher.considerAll(),S.matcher.lastIndex=Ee;const h=S.matcher.exec(f);if(!h)break;const b=f.substring(Ee,h.index),I=Ge(b,h);Ee=h.index+I}Ge(f.substring(Ee))}return W.finalize(),be=W.toHTML(),{language:p,value:be,relevance:je,illegal:!1,_emitter:W,_top:S}}catch(h){if(h.message&&h.message.includes("Illegal"))return{language:p,value:on(f),illegal:!0,relevance:0,_illegalBy:{message:h.message,index:Ee,context:f.slice(Ee-100,Ee+100),mode:h.mode,resultSoFar:be},_emitter:W};if(o)return{language:p,value:on(f),illegal:!1,relevance:0,errorRaised:h,_emitter:W,_top:S};throw h}}function y(p){const f={value:on(p),illegal:!1,relevance:0,_top:s,_emitter:new r.__emitter(r)};return f._emitter.addText(p),f}function w(p,f){f=f||r.languages||Object.keys(n);const g=y(p),x=f.filter(j).filter(Q).map(z=>m(z,p,!1));x.unshift(g);const C=x.sort((z,ee)=>{if(z.relevance!==ee.relevance)return ee.relevance-z.relevance;if(z.language&&ee.language){if(j(z.language).supersetOf===ee.language)return 1;if(j(ee.language).supersetOf===z.language)return-1}return 0}),[O,F]=C,ie=O;return ie.secondBest=F,ie}function v(p,f,g){const x=f&&t[f]||g;p.classList.add("hljs"),p.classList.add(`language-${x}`)}function A(p){let f=null;const g=d(p);if(l(g))return;if(re("before:highlightElement",{el:p,language:g}),p.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",p);return}if(p.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(p)),r.throwUnescapedHTML))throw new ms("One of your code blocks includes unescaped HTML.",p.innerHTML);f=p;const x=f.textContent,C=g?u(x,{language:g,ignoreIllegals:!0}):w(x);p.innerHTML=C.value,p.dataset.highlighted="yes",v(p,g,C.language),p.result={language:C.language,re:C.relevance,relevance:C.relevance},C.secondBest&&(p.secondBest={language:C.secondBest.language,relevance:C.secondBest.relevance}),re("after:highlightElement",{el:p,result:C,text:x})}function E(p){r=Nn(r,p)}const k=()=>{G(),$e("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function T(){G(),$e("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let _=!1;function G(){function p(){G()}if(document.readyState==="loading"){_||window.addEventListener("DOMContentLoaded",p,!1),_=!0;return}document.querySelectorAll(r.cssSelector).forEach(A)}function M(p,f){let g=null;try{g=f(e)}catch(x){if(ke("Language definition for '{}' could not be registered.".replace("{}",p)),o)ke(x);else throw x;g=s}g.name||(g.name=p),n[p]=g,g.rawDefinition=f.bind(null,e),g.aliases&&N(g.aliases,{languageName:p})}function L(p){delete n[p];for(const f of Object.keys(t))t[f]===p&&delete t[f]}function ae(){return Object.keys(n)}function j(p){return p=(p||"").toLowerCase(),n[p]||n[t[p]]}function N(p,{languageName:f}){typeof p=="string"&&(p=[p]),p.forEach(g=>{t[g.toLowerCase()]=f})}function Q(p){const f=j(p);return f&&!f.disableAutodetect}function Ae(p){p["before:highlightBlock"]&&!p["before:highlightElement"]&&(p["before:highlightElement"]=f=>{p["before:highlightBlock"](Object.assign({block:f.el},f))}),p["after:highlightBlock"]&&!p["after:highlightElement"]&&(p["after:highlightElement"]=f=>{p["after:highlightBlock"](Object.assign({block:f.el},f))})}function me(p){Ae(p),i.push(p)}function fe(p){const f=i.indexOf(p);f!==-1&&i.splice(f,1)}function re(p,f){const g=p;i.forEach(function(x){x[g]&&x[g](f)})}function Se(p){return $e("10.7.0","highlightBlock will be removed entirely in v12.0"),$e("10.7.0","Please use highlightElement now."),A(p)}Object.assign(e,{highlight:u,highlightAuto:w,highlightAll:G,highlightElement:A,highlightBlock:Se,configure:E,initHighlighting:k,initHighlightingOnLoad:T,registerLanguage:M,unregisterLanguage:L,listLanguages:ae,getLanguage:j,registerAliases:N,autoDetection:Q,inherit:Nn,addPlugin:me,removePlugin:fe}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=ps,e.regex={concat:Te,lookahead:nt,either:Sn,optional:Ci,anyNumberOfTimes:Ii};for(const p in He)typeof He[p]=="object"&&Qn(He[p]);return Object.assign(e,He),e},Me=dt({});Me.newInstance=()=>dt({});var gs=Me;Me.HighlightJS=Me;Me.default=Me;const le=Si(gs);function fs(e){const n=e.regex,t={},i={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},i]});const o={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},c=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},r={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,o]};o.contains.push(r);const l={match:/\\"/},d={className:"string",begin:/'/,end:/'/},u={match:/\\'/},m={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},y=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],w=e.SHEBANG({binary:`(${y.join("|")})`,relevance:10}),v={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},A=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],E=["true","false"],k={match:/(\/[a-z._-]+)+/},T=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],_=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],G=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],M=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:A,literal:E,built_in:[...T,..._,"set","shopt",...G,...M]},contains:[w,e.SHEBANG(),v,m,c,s,k,r,l,d,u,t]}}const Bn="[A-Za-z$_][0-9A-Za-z$_]*",bs=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],ys=["true","false","null","undefined","NaN","Infinity"],ut=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],pt=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],mt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ws=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],vs=[].concat(mt,ut,pt);function As(e){const n=e.regex,t=(g,{after:x})=>{const C="</"+g[0].slice(1);return g.input.indexOf(C,x)!==-1},i=Bn,o={begin:"<>",end:"</>"},c=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(g,x)=>{const C=g[0].length+g.index,O=g.input[C];if(O==="<"||O===","){x.ignoreMatch();return}O===">"&&(t(g,{after:C})||x.ignoreMatch());let F;const ie=g.input.substring(C);if(F=ie.match(/^\s*=/)){x.ignoreMatch();return}if((F=ie.match(/^\s+extends\s+/))&&F.index===0){x.ignoreMatch();return}}},r={$pattern:Bn,keyword:bs,literal:ys,built_in:vs,"variable.language":ws},l="[0-9](_?[0-9])*",d=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},w={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},v={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"css"}},A={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"graphql"}},E={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,y]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},_=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,w,v,A,E,{match:/\$\d+/},m];y.contains=_.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(_)});const G=[].concat(T,y.contains),M=G.concat([{begin:/(\s*)\(/,end:/\)/,keywords:r,contains:["self"].concat(G)}]),L={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:M},ae={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,n.concat(i,"(",n.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},j={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ut,...pt]}},N={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Q={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[L],illegal:/%/},Ae={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function me(g){return n.concat("(?!",g.join("|"),")")}const fe={match:n.concat(/\b/,me([...mt,"super","import"].map(g=>`${g}\\s*\\(`)),i,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},re={begin:n.concat(/\./,n.lookahead(n.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Se={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},L]},p="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(p)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[L]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:M,CLASS_REFERENCE:j},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),N,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,w,v,A,E,T,{match:/\$\d+/},m,j,{scope:"attr",match:i+n.lookahead(":"),relevance:0},f,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:p,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:M}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:c},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},Q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[L,e.inherit(e.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},re,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[L]},fe,Ae,ae,Se,{match:/\$[(.]/}]}}function Ss(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},i=["true","false","null"],o={scope:"literal",beginKeywords:i.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:i},contains:[n,t,e.QUOTE_STRING_MODE,o,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Es(e){const n=e.regex,t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},i={begin:"^[-\\*]{3,}",end:"$"},o={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},c={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},s={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},r=/[A-Za-z][A-Za-z0-9+.-]*/,l={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:n.concat(/\[.+?\]\(/,r,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},d={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},m=e.inherit(d,{contains:[]}),y=e.inherit(u,{contains:[]});d.contains.push(y),u.contains.push(m);let w=[t,l];return[d,u,m,y].forEach(k=>{k.contains=k.contains.concat(w)}),w=w.concat(d,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:w},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:w}]}]},t,c,d,u,{className:"quote",begin:"^>\\s+",contains:w,end:"$"},o,i,l,s,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}function ht(e){return e?typeof e=="string"?e:e.source:null}function Pe(e){return P("(?=",e,")")}function P(...e){return e.map(t=>ht(t)).join("")}function ks(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Y(...e){return"("+(ks(e).capture?"":"?:")+e.map(i=>ht(i)).join("|")+")"}const xn=e=>P(/\b/,e,/\w$/.test(e)?/\b/:/\B/),xs=["Protocol","Type"].map(xn),Un=["init","self"].map(xn),Ts=["Any","Self"],rn=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","package","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],Gn=["false","nil","true"],Is=["assignment","associativity","higherThan","left","lowerThan","none","right"],Cs=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],Fn=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],gt=Y(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),ft=Y(gt,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),cn=P(gt,ft,"*"),bt=Y(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),Ke=Y(bt,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),de=P(bt,Ke,"*"),We=P(/[A-Z]/,Ke,"*"),$s=["attached","autoclosure",P(/convention\(/,Y("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",P(/objc\(/,de,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],_s=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function Ds(e){const n={match:/\s+/,relevance:0},t=e.COMMENT("/\\*","\\*/",{contains:["self"]}),i=[e.C_LINE_COMMENT_MODE,t],o={match:[/\./,Y(...xs,...Un)],className:{2:"keyword"}},c={match:P(/\./,Y(...rn)),relevance:0},s=rn.filter(R=>typeof R=="string").concat(["_|0"]),r=rn.filter(R=>typeof R!="string").concat(Ts).map(xn),l={variants:[{className:"keyword",match:Y(...r,...Un)}]},d={$pattern:Y(/\b\w+/,/#\w+/),keyword:s.concat(Cs),literal:Gn},u=[o,c,l],m={match:P(/\./,Y(...Fn)),relevance:0},y={className:"built_in",match:P(/\b/,Y(...Fn),/(?=\()/)},w=[m,y],v={match:/->/,relevance:0},A={className:"operator",relevance:0,variants:[{match:cn},{match:`\\.(\\.|${ft})+`}]},E=[v,A],k="([0-9]_*)+",T="([0-9a-fA-F]_*)+",_={className:"number",relevance:0,variants:[{match:`\\b(${k})(\\.(${k}))?([eE][+-]?(${k}))?\\b`},{match:`\\b0x(${T})(\\.(${T}))?([pP][+-]?(${k}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},G=(R="")=>({className:"subst",variants:[{match:P(/\\/,R,/[0\\tnr"']/)},{match:P(/\\/,R,/u\{[0-9a-fA-F]{1,8}\}/)}]}),M=(R="")=>({className:"subst",match:P(/\\/,R,/[\t ]*(?:[\r\n]|\r\n)/)}),L=(R="")=>({className:"subst",label:"interpol",begin:P(/\\/,R,/\(/),end:/\)/}),ae=(R="")=>({begin:P(R,/"""/),end:P(/"""/,R),contains:[G(R),M(R),L(R)]}),j=(R="")=>({begin:P(R,/"/),end:P(/"/,R),contains:[G(R),L(R)]}),N={className:"string",variants:[ae(),ae("#"),ae("##"),ae("###"),j(),j("#"),j("##"),j("###")]},Q=[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}],Ae={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:Q},me=R=>{const be=P(R,/\//),S=P(/\//,R);return{begin:be,end:S,contains:[...Q,{scope:"comment",begin:`#(?!.*${S})`,end:/$/}]}},fe={scope:"regexp",variants:[me("###"),me("##"),me("#"),Ae]},re={match:P(/`/,de,/`/)},Se={className:"variable",match:/\$\d+/},p={className:"variable",match:`\\$${Ke}+`},f=[re,Se,p],g={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:_s,contains:[...E,_,N]}]}},x={scope:"keyword",match:P(/@/,Y(...$s),Pe(Y(/\(/,/\s+/)))},C={scope:"meta",match:P(/@/,de)},O=[g,x,C],F={match:Pe(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:P(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,Ke,"+")},{className:"type",match:We,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:P(/\s+&\s+/,Pe(We)),relevance:0}]},ie={begin:/</,end:/>/,keywords:d,contains:[...i,...u,...O,v,F]};F.contains.push(ie);const z={match:P(de,/\s*:/),keywords:"_|0",relevance:0},ee={begin:/\(/,end:/\)/,relevance:0,keywords:d,contains:["self",z,...i,fe,...u,...w,...E,_,N,...f,...O,F]},Ie={begin:/</,end:/>/,keywords:"repeat each",contains:[...i,F]},Ue={begin:Y(Pe(P(de,/\s*:/)),Pe(P(de,/\s+/,de,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:de}]},Re={begin:/\(/,end:/\)/,keywords:d,contains:[Ue,...i,...u,...E,_,N,...O,F,ee],endsParent:!0,illegal:/["']/},Qe={match:[/(func|macro)/,/\s+/,Y(re.match,de,cn)],className:{1:"keyword",3:"title.function"},contains:[Ie,Re,n],illegal:[/\[/,/%/]},en={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[Ie,Re,n],illegal:/\[|%/},nn={match:[/operator/,/\s+/,cn],className:{1:"keyword",3:"title"}},tn={begin:[/precedencegroup/,/\s+/,We],className:{1:"keyword",3:"title"},contains:[F],keywords:[...Is,...Gn],end:/}/},Ce={match:[/class\b/,/\s+/,/func\b/,/\s+/,/\b[A-Za-z_][A-Za-z0-9_]*\b/],scope:{1:"keyword",3:"keyword",5:"title.function"}},Ge={match:[/class\b/,/\s+/,/var\b/],scope:{1:"keyword",3:"keyword"}},se={begin:[/(struct|protocol|class|extension|enum|actor)/,/\s+/,de,/\s*/],beginScope:{1:"keyword",3:"title.class"},keywords:d,contains:[Ie,...u,{begin:/:/,end:/\{/,keywords:d,contains:[{scope:"title.class.inherited",match:We},...u],relevance:0}]};for(const R of N.variants){const be=R.contains.find(Fe=>Fe.label==="interpol");be.keywords=d;const S=[...u,...w,...E,_,N,...f];be.contains=[...S,{begin:/\(/,end:/\)/,contains:["self",...S]}]}return{name:"Swift",keywords:d,contains:[...i,Qe,en,Ce,Ge,se,nn,tn,{beginKeywords:"import",end:/$/,contains:[...i],relevance:0},fe,...u,...w,...E,_,N,...f,...O,F,ee]}}const Ye="[A-Za-z$_][0-9A-Za-z$_]*",yt=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],wt=["true","false","null","undefined","NaN","Infinity"],vt=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],At=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],St=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Et=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],kt=[].concat(St,vt,At);function Ms(e){const n=e.regex,t=(g,{after:x})=>{const C="</"+g[0].slice(1);return g.input.indexOf(C,x)!==-1},i=Ye,o={begin:"<>",end:"</>"},c=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(g,x)=>{const C=g[0].length+g.index,O=g.input[C];if(O==="<"||O===","){x.ignoreMatch();return}O===">"&&(t(g,{after:C})||x.ignoreMatch());let F;const ie=g.input.substring(C);if(F=ie.match(/^\s*=/)){x.ignoreMatch();return}if((F=ie.match(/^\s+extends\s+/))&&F.index===0){x.ignoreMatch();return}}},r={$pattern:Ye,keyword:yt,literal:wt,built_in:kt,"variable.language":Et},l="[0-9](_?[0-9])*",d=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},w={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},v={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"css"}},A={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"graphql"}},E={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,y]},T={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},_=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,w,v,A,E,{match:/\$\d+/},m];y.contains=_.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(_)});const G=[].concat(T,y.contains),M=G.concat([{begin:/(\s*)\(/,end:/\)/,keywords:r,contains:["self"].concat(G)}]),L={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:M},ae={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,n.concat(i,"(",n.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},j={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...vt,...At]}},N={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Q={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[L],illegal:/%/},Ae={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function me(g){return n.concat("(?!",g.join("|"),")")}const fe={match:n.concat(/\b/,me([...St,"super","import"].map(g=>`${g}\\s*\\(`)),i,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},re={begin:n.concat(/\./,n.lookahead(n.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Se={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},L]},p="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(p)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[L]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:M,CLASS_REFERENCE:j},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),N,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,w,v,A,E,T,{match:/\$\d+/},m,j,{scope:"attr",match:i+n.lookahead(":"),relevance:0},f,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,e.REGEXP_MODE,{className:"function",begin:p,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:M}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:c},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},Q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[L,e.inherit(e.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},re,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[L]},fe,Ae,ae,Se,{match:/\$[(.]/}]}}function Rs(e){const n=e.regex,t=Ms(e),i=Ye,o=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],c={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},s={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:o},contains:[t.exports.CLASS_REFERENCE]},r={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},l=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],d={$pattern:Ye,keyword:yt.concat(l),literal:wt,built_in:kt.concat(o),"variable.language":Et},u={className:"meta",begin:"@"+i},m=(A,E,k)=>{const T=A.contains.findIndex(_=>_.label===E);if(T===-1)throw new Error("can not find mode to replace");A.contains.splice(T,1,k)};Object.assign(t.keywords,d),t.exports.PARAMS_CONTAINS.push(u);const y=t.contains.find(A=>A.scope==="attr"),w=Object.assign({},y,{match:n.concat(i,n.lookahead(/\s*\?:/))});t.exports.PARAMS_CONTAINS.push([t.exports.CLASS_REFERENCE,y,w]),t.contains=t.contains.concat([u,c,s,w]),m(t,"shebang",e.SHEBANG()),m(t,"use_strict",r);const v=t.contains.find(A=>A.label==="func.def");return v.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}function Ps(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},c={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},s=e.inherit(c,{begin:/\(/,end:/\)/}),r=e.inherit(e.APOS_STRING_MODE,{className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[c,l,r,s,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[c,s,l,r]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:d}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function Ls(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",i={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},o={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},c={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},s={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,o]},r=e.inherit(s,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),y={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},w={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},v={begin:/\{/,end:/\}/,contains:[w],illegal:"\\n",relevance:0},A={begin:"\\[",end:"\\]",contains:[w],illegal:"\\n",relevance:0},E=[i,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},y,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},v,A,c,s],k=[...E];return k.pop(),k.push(r),w.contains=k,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:E}}le.registerLanguage("bash",fs);le.registerLanguage("adascript",e=>({name:"AdaScript",keywords:{keyword:"var const func class struct enum import from if else for in while repeat switch case default break continue return async await",literal:"true false null",type:"Any Bool Int Float String List Map Range"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{scope:"meta",begin:/@[A-Za-z_]\w*/},{scope:"property",begin:/\.[A-Za-z_]\w*/},e.C_NUMBER_MODE]}));le.registerLanguage("javascript",As);le.registerLanguage("json",Ss);le.registerLanguage("markdown",Es);le.registerLanguage("swift",e=>{const n=Ds(e);return n.contains=[{scope:"property",begin:/\.[A-Za-z_]\w*/},...n.contains??[]],n});le.registerLanguage("typescript",Rs);le.registerLanguage("xml",Ps);le.registerLanguage("yaml",Ls);const Ns={ada:"adascript",html:"xml",js:"javascript",md:"markdown",sh:"bash",shell:"bash",ts:"typescript",txt:"plaintext",yml:"yaml"};function xt(e){const n=e.trim().toLowerCase();return Ns[n]??n}function Tt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function It(e){const n=xt(e);return n?`language-${Tt(n)}`:"language-plaintext"}function Ct(e,n){const t=xt(n);return!t||t==="plaintext"||!le.getLanguage(t)?Tt(e):le.highlight(e,{language:t,ignoreIllegals:!0}).value}function Os(e,n){const t=e.replace(/\r\n?/g,`
`).split(`
`);return t.length>1&&t[t.length-1]===""&&t.pop(),t.map((i,o)=>`<span class="code-line"><span class="code-line-number" aria-hidden="true">${o+1}</span><span class="code-line-content">${Ct(i,n)}</span></span>`).join("")}const Bs=`---
title: "Introducing Ada 0.1.0"
slug: "introducing-adaengine-0-1-0"
description: "Ada 0.1.0 is the first public milestone for a Swift-first, data-driven game engine and app framework."
date: "2026-06-1 13:36"
author: "SpectralDragon"
tags:
  - release
image: images/main/tilemap.png
published: true
featured: true
---

# Introducing Ada 0.1.0

![Ada Editor workspace](images/main/ada-editor.png "Ada Editor workspace with Swift source, scene preview, SwiftPM commands, and the output console.")

After a long road, I am excited to introduce **Ada 0.1.0**: a free and open source game engine and app framework written in Swift.

Ada is built around a simple idea: Swift should be a great language for making games, interactive apps, tools, and creative software — not only apps for Apple platforms. Swift is expressive, safe, fast, and comfortable to write. Ada tries to bring those strengths into game development with a modular engine, a data-driven architecture, and APIs that feel natural to Swift developers.

Ada is available on GitHub under the [MIT license](https://github.com/AdaEngine/AdaEngine). This first release is still early, but it is already a real milestone: the engine can open windows, run an ECS-driven game loop, render sprites and UI, load assets and scenes, play audio, handle input, run physics, and build examples across the engine modules.

:::warning Early release
Ada 0.1.0 is an early release. APIs will change, some features are incomplete, documentation is still growing, and you should expect rough edges. I do not recommend using it for serious production projects yet unless you are comfortable with instability and want to help shape the engine.
:::

If that sounds exciting, you can jump straight into the [tutorials](https://docs.adaengine.org/tutorials/adaengine/) or explore the [GitHub repository](https://github.com/AdaEngine/AdaEngine).

:::info
This article includes links to Ada documentation and source code where possible. The docs are generated from the codebase, so they will continue improving together with the engine.
:::

## What is Ada?

Ada is a data-driven game engine and app framework for Swift. Its core design goals are:

- **Simple**: easy to learn for newcomers, but still flexible enough for experienced users.
- **Modular**: most engine features are delivered as plugins, so you can choose what your app needs.
- **Data-driven**: the heart of Ada is an Entity Component System.
- **Fast iteration**: the engine is designed for quick builds and quick feedback.
- **Capable**: the first focus is a complete 2D workflow, with 3D support already present and planned to grow.
- **Cross-platform by design**: Ada currently targets Apple platforms and is actively moving toward broader support including Windows, Linux, Android, and WebAssembly/WebGPU.

The current feature set includes:

- **Sprites**: render many textures with batching; use individual textures, sprite sheets, and animated textures.
- **Scenes**: save and load ECS worlds from human-readable scene files.
- **Tilemaps**: build levels with [LDtk](https://ldtk.io) or integrate another editor with the provided APIs.
- **2D physics**: built-in support powered by [Box2D v3](https://box2d.io).
- **Assets**: load and save game assets, with async loading and asset handles.
- **Hot asset reloading**: reload changed assets at runtime and stay in the flow.
- **Audio**: load and play sound resources, including spatial playback attached to entities.
- **Plugins**: rendering, audio, input, UI, events, physics, scenes, sprites, and other systems are composed through plugins.
- **Events and observation**: communicate across your game with global events or ECS-style frame events.
- **Parent/child relationships**: build entity hierarchies and propagate transforms through them.
- **Multiple render backends**: Metal on Apple platforms and WebGPU/Dawn where enabled.
- **Render graphs**: control how rendering work is scheduled and composed.
- **AdaUI**: build game and app UI with a SwiftUI-inspired API.
- **Gamepads**: access connected gamepads on supported platforms.
- **Examples**: a growing set of demos for sprites, UI, input, events, scenes, tilemaps, and 3D.

## A Swift-native app entry point

Ada apps start with an API that should feel familiar if you have used SwiftUI:

\`\`\`swift
import AdaEngine

@main
struct AdaApp: App {
    var body: some AppScene {
        DefaultAppWindow()
            .windowMode(.windowed)
            .windowTitle("Ada App")
    }
}
\`\`\`

That is enough to create a window and install the default engine plugins.

The core philosophy is customization through plugins. Rendering, audio, input, events, UI, physics, scenes, sprites, and other features are added to an application through plugin composition. You can start with sensible defaults or build a smaller runtime by selecting only the parts you need.

For more control, use [\`EmptyWindow\`](https://docs.adaengine.org/documentation/adaapp/emptywindow) and add plugins manually:

\`\`\`swift
import AdaEngine

@main
struct AdaApp: App {
    var body: some AppScene {
        EmptyWindow()
            .addPlugins(DefaultPlugins())
            .windowMode(.windowed)
            .windowTitle("Ada App")
    }
}
\`\`\`

[\`DefaultPlugins\`](https://docs.adaengine.org/documentation/adaengine/defaultplugins/) is the bundle most users should start with. When you need a lighter runtime, you can disable parts of the bundle with [\`disable(_:)\`](https://docs.adaengine.org/documentation/adaengine/defaultplugins/disable(_:)).

## Entity Component System

Ada's heart is its ECS framework. It is inspired by engines and frameworks such as Bevy and RealityKit, but it is designed to feel natural in Swift.

In an Entity Component System:

- **Entities** are unique identifiers.
- **Components** are pieces of data attached to entities.
- **Systems** are logic that reads and writes components.
- **Resources** are unique world-level values.

This approach keeps game data separate from game logic. It also makes it easier to scale a game from a few objects to many systems and many entities.

AdaECS uses normal Swift types and adds macros to reduce boilerplate:

\`\`\`swift
import AdaEngine

@Component
struct Position {
    var value: Float
}

@Component
struct Velocity {
    var value: Float
}

@System
func Movement(
    _ query: Query<
        Ref<Position>, // read-write access
        Velocity       // read-only access
    >
) {
    query.forEach { position, velocity in
        position.value += velocity.value
    }
}

struct ExamplePlugin: Plugin {
    func setup(in app: AppWorlds) {
        app.spawn {
            Position(value: 0)
            Velocity(value: 1)
        }

        app.spawn {
            Position(value: 1)
            Velocity(value: 2)
        }

        app.addSystem(MovementSystem.self, on: .update)
    }
}

@main
struct AdaApp: App {
    var body: some AppScene {
        DefaultAppWindow()
            .addPlugins(ExamplePlugin())
    }
}
\`\`\`

The \`@System\` macro generates the concrete system type for you. You write the logic as a Swift function; Ada turns it into a registered ECS system.

### Queries

Queries fetch components from the world:

\`\`\`swift
@System
func Movement(_ query: Query<Entity, Transform>) {
    query.forEach { entity, transform in
        // Iterate over every entity with a Transform.
    }
}
\`\`\`

### Filter queries

Filters restrict the set of matching entities:

\`\`\`swift
@System
func PlayerMovement(
    _ query: FilterQuery<Entity, Transform, With<Player>>
) {
    query.forEach { entity, transform in
        // Iterate only over entities that also have Player.
    }
}
\`\`\`

### Change detection

Change detection lets a system react only when relevant data changes:

\`\`\`swift
@System
func EnemyHealthBar(
    _ query: FilterQuery<Enemy, Changed<Health>>
) {
    query.forEach { enemy in
        // Run when Health has been added or changed.
    }
}
\`\`\`

### Resources

Resources store unique world-level data:

\`\`\`swift
struct GameScore: Resource {
    var score: Int
    var bulletFireCount: Int
}

world.insertResource(GameScore(score: 0, bulletFireCount: 0))

@System
func UpdateScore(score: ResMut<GameScore>) {
    score.score += 1
}
\`\`\`

Delta time is also exposed as a resource:

\`\`\`swift
@System
func Movement(
    time: Res<DeltaTime>,
    query: Query<Ref<Position>>
) {
    query.forEach {
        $0.value += 20 * time.deltaTime
    }
}
\`\`\`

### Commands

When a system needs to spawn or delete entities, or insert components, it can use [\`Commands\`](https://docs.adaengine.org/documentation/adaecs/commands). Commands are collected and then applied after the system finishes, which keeps system execution safe.

\`\`\`swift
@System
func GameStartup(_ commands: Commands) {
    commands.spawn("Player") {
        Player()
        Transform()
    }
}
\`\`\`

### Local values

Systems can keep local state with [\`Local\`](https://docs.adaengine.org/documentation/adaecs/local):

\`\`\`swift
@System
func UpdateData(isUpdated: Local<Bool> = false) {
    if !isUpdated.wrappedValue {
        // Perform one-time work.
        isUpdated.wrappedValue = true
    }
}
\`\`\`

### Struct systems

For more control, AdaECS also supports struct-based systems with [\`@PlainSystem\`](https://docs.adaengine.org/documentation/adaecs/plainsystem(dependencies:)):

\`\`\`swift
@PlainSystem(dependencies: [
    .after(EnemyMovement.self),
    .before(PhysicsSystem.self)
])
struct MovementSystem {
    @Query<Player, Transform>
    private var playerQuery

    init(world: World) {}

    func update(context: UpdateContext) {
        playerQuery.forEach {
            // Update player movement here.
        }
    }
}
\`\`\`

### Schedulers

Systems run in schedulers. Ada includes common stages such as startup, pre-update, update, fixed update, and others:

\`\`\`swift
world
    .addSystem(StartupSystem.self, on: .startup)
    .addSystem(MovementSystem.self, on: .fixedUpdate)
    .addSystem(UpdateEnemySystem.self, on: .preUpdate)
    .addSystem(UpdateScoreSystem.self, on: .update)
\`\`\`

\`.startup\` runs once when the app launches. You can also build custom schedulers when your game needs its own execution model.

:::warning Early release
Be careful with system dependencies. If a system depends on another system that is not registered in the same scheduler, the app can fail at runtime.
:::

### Bundles

Bundles combine several components into one reusable unit. The \`@Bundle\` macro generates the code needed to unpack the bundle into components:

\`\`\`swift
@Bundle
struct EnemyBundle {
    let enemy = Enemy()
    let transform: Transform
    let health: Health
}

world.spawn(
    "Enemy",
    bundle: EnemyBundle(
        transform: Transform(),
        health: Health(30)
    )
)
\`\`\`

### Scriptable objects

If you prefer a Unity-like workflow for some gameplay code, Ada provides [\`ScriptableObject\`](https://docs.adaengine.org/documentation/adascene/scriptableobject) and [\`ScriptableComponents\`](https://docs.adaengine.org/documentation/adascene/scriptablecomponents):

\`\`\`swift
final class Player: ScriptableObject {
    func update(_ deltaTime: TimeInterval) {
        if input.isKeyPressed(.w) {
            // Move player.
        }
    }
}

world.spawn("Player") {
    ScriptableComponents(
        components: [
            Player()
        ]
    )
}
\`\`\`

This gives you a familiar object-style escape hatch while the engine remains ECS-first.

## AdaUI

Ada includes a UI framework called AdaUI. It is inspired by SwiftUI and is designed for both games and editor-like tools.

SwiftUI proved how productive declarative UI can be. AdaUI brings a similar style into the engine, so UI code can be written directly in Swift and rendered inside an Ada scene.

![AdaUI and SwiftUI layout diff for a media card stack](images/main/adaui_example_1.jpg "AdaUI and SwiftUI layout comparison for a media review card stack.")

![AdaUI and SwiftUI layout diff for a chat composer shell](images/main/adaui_example_2.jpg "AdaUI and SwiftUI layout comparison for a chat composer shell.")

### Views

A view implements the [\`View\`](https://docs.adaengine.org/documentation/adaui/view) protocol:

\`\`\`swift
struct GameOverView: View {
    var body: some View {
        Text("Game Over")
    }
}
\`\`\`

### Layout

AdaUI includes familiar stack layout primitives:

\`\`\`swift
struct GameOverView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Game Over")
            Text("Try again")
        }
    }
}
\`\`\`

### Interactive elements

Buttons and other interactive controls can be composed in the same style:

\`\`\`swift
struct MenuView: View {
    var body: some View {
        Button("Start Game") {
            // Start game.
        }

        Button(action: {
            // Open settings.
        }, label: {
            Text("Settings")
                .foregroundColor(.red)
        })
    }
}
\`\`\`

### Modifiers

Modifiers apply style and behavior:

\`\`\`swift
struct GameOverView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Game Over")
                .font(.system(size: 50))
                .foregroundColor(.red)
        }
    }
}
\`\`\`

### State and bindings

Views can store state and update when that state changes:

\`\`\`swift
struct GameOverView: View {
    @State private var isDead = false

    var body: some View {
        VStack(spacing: 20) {
            if isDead {
                Text("Game Over")
                    .font(.system(size: 50))
                    .foregroundColor(.red)
            }
        }
        .onEvent(YourGameEvent.UserDied) {
            self.isDead = true
        }
    }
}
\`\`\`

Bindings pass state between views:

\`\`\`swift
struct ParentView: View {
    @State private var isDead = false

    var body: some View {
        SubView(isDead: $isDead)
    }
}

struct SubView: View {
    @Binding var isDead: Bool

    var body: some View {
        if isDead {
            Text("Game Over")
        }
    }
}
\`\`\`

### Attaching UI to an entity

To show a view in the world, attach it with [\`UIComponent\`](https://docs.adaengine.org/documentation/adaui/uicomponent):

\`\`\`swift
let gameOverView = GameOverView()

world.spawn("GameOverView") {
    UIComponent(view: gameOverView)
}
\`\`\`

### Environment access

AdaUI views can read values from the environment. For example, a view attached to an entity can access the ECS world:

\`\`\`swift
struct DebugView: View {
    @Environment(\\.world)
    private var world

    var body: some View {
        Button("Spawn Enemy") {
            world.spawn("Enemy", bundle: EnemyBundle())
        }
    }
}
\`\`\`

### Images

Images can be used directly in UI:

\`\`\`swift
struct UserAvatarView: View {
    var body: some View {
        Image("@res://avatar.png")
    }
}
\`\`\`

AdaUI is especially important for the future of Ada because the editor is planned to be built on top of the same UI system that games can use.

![Ada Editor UI](images/main/ada-editor.png "The editor is planned around the same AdaUI foundations available to games and tools.")

## 2D features

Ada 0.1.0 is focused on building a strong 2D foundation.

### Sprites

Sprites are a core building block for many 2D games. Ada can render sprites from [\`Texture2D\`](https://docs.adaengine.org/documentation/adarender/texture2d) and other texture resources:

\`\`\`swift
let texture = try await AssetsManager.load(Texture2D.self, at: "@res://sprite.png")

world.spawn {
    Sprite(texture: texture)
    Transform()
}
\`\`\`

### Texture atlases and sprite sheets

Texture atlases can be used for animation, tile sets, and optimized rendering:

\`\`\`swift
let image = try await AssetsManager.load(Image.self, at: "@res://characters.png")
let textureAtlas = TextureAtlas(from: image, size: Vector2(16, 16))

world.spawn {
    Sprite(
        texture: textureAtlas[0, 1],
        size: Size(width: 16, height: 16)
    )
    Transform()
}
\`\`\`

If sprite size is not specified, Ada can infer it from the texture.

### Tilemaps

Ada includes a dedicated \`AdaTilemap\` module. The built-in demos include both custom tilemap examples and LDtk-based tilemap loading. This makes it possible to build levels visually and then load them into an ECS world.

The goal is to support practical 2D workflows: draw levels in an editor, load them as data, attach physics, and iterate quickly.

![Tilemap demo](images/main/tilemap.png "A tilemap scene rendered by Ada.")

### 2D physics

Ada includes \`AdaPhysics\`, backed by Box2D. You can attach collision components to entities and receive collision events through the event system.

Physics is integrated into the ECS world, so gameplay code can combine transforms, sprites, collision components, and systems in the same data-driven model.

## Scenes

A scene is a collection of entities, components, and resources that can be saved, loaded, and spawned into a world.

You can think about a scene as a prefab or level file: it describes a piece of your game that can be loaded when needed.

### Scene files

Scenes are saved as human-readable YAML. A scene file can include entities, component data, transforms, sprites, physics components, and resources:

\`\`\`yaml
version: 1.0.0
scene: Scene
world:
  entities:
  - name: Ground
    id: 122210699653662020
    components:
      AdaSprite.Sprite:
        tintColor:
          red: 1.0
          green: 1.0
          blue: 1.0
          alpha: 1.0
        flipX: false
        flipY: false
      AdaTransform.Transform:
        rotation:
          x: 0.0
          y: 0.0
          z: 0.0
          w: 1.0
        scale:
          x: 3.0
          y: 0.19
          z: 0.19
        position:
          x: 0.0
          y: -1.0
          z: 0.0
      AdaPhysics.Collision2DComponent:
        shapes:
        - fixture:
            box:
              _0:
                halfWidth: 0.5
                halfHeight: 0.5
                offset:
                  x: 0.0
                  y: 0.0
        mode:
          default: {}
  resources: {}
\`\`\`

### Loading scenes

Scenes are assets, so they can be loaded through the asset system:

\`\`\`swift
let scene = try await AssetsManager.load(Scene.self, at: "@res://game_scene.ascn")

world.spawn("Spawned scene") {
    DynamicScene(scene: scene)
}
\`\`\`

The spawned scene can attach its entities and resources under a parent entity.

### Hot reloading scenes

Scene hot reloading is one of the most important iteration features. When a scene file changes, Ada can apply those changes to a running scene without requiring a restart or a full rebuild. This makes level editing and gameplay tuning much faster.

:::info
Hot reload is an early feature, but the direction is clear: edit data, see the result immediately, and stay focused on the game instead of the build loop.
:::

## Events

Games and apps need to communicate constantly: collisions begin, buttons are pressed, UI opens, enemies spawn, players connect, and systems need to react.

Ada supports both global event-style messaging and ECS frame events.

### EventManager

You can subscribe to an event and store the cancellable token:

\`\`\`swift
let cancellable = world.subscribe(
    on: CollisionEvents.Began.self
) { payload in
    // Handle collision.
}

world.eventManager.sendEvent(SomeEvent())

// Or send globally:
EventManager.default.sendEvent(SomeEvent())
\`\`\`

### ECS events

For ECS-native workflows, Ada provides \`Events\` and \`EventSender\`:

\`\`\`swift
@System
func HostConnection(_ events: Events<OnConnect>) {
    for event in events {
        print("User connected", event.userId)
    }
}

@System
func ConnectionUpdate(_ sender: EventSender<OnConnect>) {
    sender(OnConnect(userId: "player#123"))
}
\`\`\`

:::note
ECS events are frame events: they are stored only for the current frame.
:::

## Assets

The asset system lets you load and save game data. Assets are referenced through handles, which makes hot reloading possible.

For example, loading a texture looks like this:

\`\`\`swift
let texture: AssetHandle<Texture2D> = try await AssetsManager.load(
    Texture2D.self,
    at: "@res://my_texture.png"
)
\`\`\`

The \`@res://\` prefix points to your app resource directory. By default, Ada looks for an \`Assets\` or \`Resources\` folder in your target. You can also set the resource directory manually.

To load from a specific bundle:

\`\`\`swift
let texture: AssetHandle<Texture2D> = try await AssetsManager.load(
    Texture2D.self,
    at: "my_texture.png",
    from: Foundation.Bundle(path: "")
)
\`\`\`

To enable hot reloading for an asset, pass \`handleChanges: true\`:

\`\`\`swift
let texture: AssetHandle<Texture2D> = try await AssetsManager.load(
    Texture2D.self,
    at: "@res://my_texture.png",
    handleChanges: true
)
\`\`\`

### Adding a new asset type

You can add support for custom assets by implementing the [\`Asset\`](https://docs.adaengine.org/documentation/adaassets/asset) protocol:

\`\`\`swift
struct MyAsset: Asset {
    init(asset decoder: AssetDecoder) async throws {
        // Decode asset contents.
    }

    func encodeContents(with encoder: AssetEncoder) async throws {
        // Encode asset contents.
    }

    static func extensions() -> [String] {
        ["txt"]
    }
}
\`\`\`

This makes the asset available to the same loading pipeline as built-in textures, sounds, scenes, and other resources.

## Audio

Ada includes an \`AdaAudio\` module backed by miniaudio. You can load an audio resource and play it from an entity:

\`\`\`swift
let backgroundSound = try await AssetsManager.load(
    AudioResource.self,
    at: "@res://background.wav"
)

let player = world.spawn {
    Player()
}

player.prepareAudio(backgroundSound)
    .setLoop(true)
    .play()
\`\`\`

Audio can be attached to entities, which opens the door for spatial sound and gameplay-driven playback.

## Rendering

Rendering in Ada is split into modules and plugins. The current codebase includes:

- \`AdaRender\` for render abstractions, cameras, materials, meshes, textures, render pipelines, and render graphs.
- \`AdaSprite\` for 2D sprite rendering.
- \`AdaCorePipelines\` for built-in rendering pipelines and shaders.
- Metal support on Apple platforms.
- WebGPU support through Dawn/Swan where enabled.
- Shader compilation and transpilation infrastructure built around SPIR-V tooling.

This release already includes the foundation for both 2D and 3D rendering. The 2D path is the most mature today. 3D exists — including meshes, cameras, materials, and a cube demo — but it needs more work before it feels complete.

Render graphs are an important part of the future direction. They make rendering work explicit and composable, which should help the engine grow from simple sprite scenes to more advanced pipelines.

## Platforms and tooling

Ada is a Swift Package using Swift 6.2. The package currently declares Apple platform targets such as macOS 15, iOS 18, tvOS 18, and visionOS 2. It also contains conditional compilation and platform backends for Linux, Windows, Android, WASI/WebAssembly, Metal, WebGPU, X11, and browser runtimes.

Not every platform is equally mature yet. Apple platforms are the most ready today, while Windows, Linux, Android, and Web are part of the active cross-platform direction.

The repository also includes SwiftPM plugins and tools, including:

- an Ada web export plugin,
- WebGPU/Tint related build tooling,
- a texture atlas builder tool and plugins,
- shader transpilation tooling,
- generated documentation support through DocC.

## Examples

The repository includes examples under [\`Demos\`](https://github.com/AdaEngine/AdaEngine/tree/main/Demos), including:

- sprite rendering,
- many sprites / stress examples,
- custom materials,
- 2D lighting,
- transparency,
- text rendering,
- gamepad input,
- scene loading,
- LDtk tilemaps,
- scriptable components,
- collision events,
- UI examples such as buttons, text fields, scene views, animated text, and a Kanban board,
- a simple 3D cube example,
- small game demos such as Snowman Attacks.

Examples are important because they show what the engine can already do and also act as practical tests for engine workflows.

![Duck Hunt demo](images/main/duck_hunt.png "A small Duck Hunt style demo running with Ada.")

![Space Invaders demo](images/main/space_invaders.jpeg "A Space Invaders style demo from the Ada examples.")

## Why I built Ada

Making games was my childhood dream. I started learning Java because I wanted to make Minecraft mods. Later I became an iOS engineer, but the dream of building games never disappeared.

I spent a lot of free time learning Godot, exploring the game development community, and trying to understand how engines work internally. I started with a small Metal project, kept experimenting, and after years of work reached this milestone: the first Ada release.

I love open source. I love Swift. I have built many open source Swift projects, and I wanted to see what would happen if Swift was used not only for apps, but also for a full game engine.

Swift has a lot to offer: value types, protocol-oriented design, macros, structured concurrency, memory safety, strong tooling, and a syntax that is pleasant to write. The biggest problem is not the language — it is the idea that Swift belongs only to macOS and iOS development.

I do not believe that is true. Swift can be more than that. Ada is my attempt to help prove it.

## What's next?

Ada 0.1.0 is a beginning, not a finish line. The next phase is about expanding the engine, polishing the experience, and growing the community.

### More platforms

The long-term goal is to support as many platforms as possible. Swift is a safe and powerful language, and I believe it can be a great fit for cross-platform game development.

The next important platform work includes WebAssembly/WebGPU, Linux, Android, and continued Windows support.

### The editor

Game developers want to prototype faster and write less boilerplate. AdaUI gives us the foundation to build an editor with the same UI framework that games can use.

Building the Ada Editor in AdaUI is an important goal: it will improve the UI framework, validate the engine tooling, and make Ada more approachable for users who prefer visual workflows.

### 3D rendering and polish

The 2D feature set is the main focus of this release, but 3D support is already present and will continue improving. There is a lot of work to do: better materials, more complete rendering features, MSAA, richer scene tooling, model workflows, and more.

The engine also needs polish across many systems: asset workflows, hot reloading, editor integration, diagnostics, examples, and API design.

### Documentation and tutorials

The API is still unstable and documentation is sparse in places. In the near future, Ada needs more tutorials, better guides, and more examples that show complete workflows from project setup to finished game mechanics.

Good documentation is not optional. It is part of the engine.

## Join Ada

If any of this sounds interesting, please check out [Ada on GitHub](https://github.com/AdaEngine/AdaEngine), read the [tutorial series](https://docs.adaengine.org/tutorials/adaengine/), explore the examples, and join the discussion.

Ada is currently built by volunteers. If you want to help build a Swift game engine — with code, documentation, examples, testing, design feedback, or ideas — you are very welcome.

This is only version 0.1.0, but it is the start of something I have wanted to build for a long time.

Let's make games with Swift.
`,Us=`---
title: "AdaEngine 1.0.0: From an Engine to a Game Development Environment"
slug: "introducing-adaengine-1-0-0"
description: "A new Ada Studio with AI agents and A2UI, AdaScript with AOT, native Android support, multiplayer, expanded 3D rendering, and Ada Cloud — what is new in AdaEngine 1.0.0."
date: "2026-10-11"
author: "SpectralDragon"
tags:
  - release
image: images/articles/ada-engine-release-1-0-0-visionos-designed.png
published: true
featured: true
---

![AdaEngine 1.0.0 release cover](images/articles/ada-engine-release-1-0-0-visionos-designed.png "AdaEngine 1.0.0 — Ada Studio in a spatial workspace.")

We are introducing **AdaEngine 1.0.0**, a major update to our open-source game engine built with Swift.

Our first public release established the foundation: ECS, rendering, scenes, assets, physics, audio, and AdaUI. Since then, we have been working to bring these capabilities together into a practical game development workflow.

Version 1.0.0 introduces a new Ada Studio with AI agents and interactive A2UI tools, significantly expands AdaScript, and adds native Android support, multiplayer, more advanced 3D rendering, and cloud infrastructure for sharing user-created games.

The journey from a first scene to a game you can share now runs through a connected set of tools.

## The new Ada Studio

The biggest addition is **Ada Studio**, a development environment for AdaEngine. It brings together project management, code, scenes, assets, interfaces, and game execution.

Studio supports both Swift and AdaScript projects. Its shared interface is built with AdaUI: we use our own UI framework for an everyday development tool and improve it through real workloads.

![Ada Studio desktop](images/studio/desktop.png "Ada Studio brings code, scenes, and development tools into one workspace.")

### Editor Mode

Editor Mode provides a workspace with a project navigator, document tabs, a scene viewport, and an Inspector.

You can create and edit 2D and 3D scenes, manage entity hierarchies, add components, and configure cameras, lighting, physics, and materials. Move, Scale, and Rotate tools let you work directly in the viewport, while Undo and Redo make experimentation easier.

The workspace can be split into two panes: keep code beside a scene, or edit several documents at once.

### Agent Mode

Desktop Studio now includes **Agent Mode**, a dedicated interface for developing with an AI agent.

Conversations and their results sit at the center of this mode. You can switch sessions, share selected code and images with an agent, open changed files, and return to the regular editor.

Both modes share the same documents and project state, making it easy to move between discussing a task and editing it yourself.

On macOS, Studio connects to external agents through the **Agent Client Protocol (ACP)**. Its catalog discovers installed agents and offers compatible adapters for Codex and Claude Code; it also recognizes Gemini CLI, OpenCode, GitHub Copilot, and Sloppy ACP. Compatible distributions can be installed and connected from Studio. Authentication stays with the selected agent.

Conversations are saved with the project. Switching sessions preserves drafts, attachments, and selected context, while a running task remains associated with its original conversation. An agent's changes can be opened in the regular editor and reviewed as a diff. Each project window runs one agent task at a time.

Agent Mode and the regular chat in Editor Mode share the same tools. The interface changes how the workspace is organized; available actions depend on the capabilities of the current host.

![Agent Mode in Ada Studio](showcases/adaengine-1-0-0/agent-mode.png "Agent Mode: project sessions, context, and a document workspace.")

### Tilemap Editor and assets

Studio now has a built-in tilemap editor with painting, erasing, layers, a tile palette, zoom, and panning.

The tileset editor configures tile sources and their geometry. For 2D lighting, you can define light-occlusion polygons and override them for individual map cells.

Studio also includes a texture atlas editor, image previews, and GLB/glTF import. A model can be opened in a 3D preview, an animation clip selected, and the model placed in a scene.

![Tilemap Editor](showcases/adaengine-1-0-0/tilemap-editor.png "Editing the Medieval Arena map: canvas, layers, and tile palette.")

### Code Editor and debugging

The code editor supports syntax highlighting for Swift, AdaScript, YAML, and GLSL, along with completion, hints, definition navigation, and diagnostics. Search works within a file or across the project.

Swift projects on macOS have integrated **LLDB** support: breakpoints, stepping, threads, call stacks, variables, watches, and a command console.

AdaScript supports diagnostics, execution in Play, and hot reload. Full execution debugging for AdaScript remains a future step.

## AI agents: from an idea to a working scene

Studio agents work with the project itself: code, scenes, assets, settings, and execution results. On desktop, these capabilities are exposed through editor tools and MCP; on mobile, they are provided by the embedded agent runtime.

### Project context and engine knowledge

An agent can read the project structure, retrieve exact API and component descriptions, find documentation, and open examples. Reference material ships with Studio and is available offline.

This helps the agent use existing engine features and work with actual component fields. Scene tools support reading and structured changes, with document revision checks and Undo.

### Images, tiles, and 3D assets

Images can be attached to a conversation as visual references. Mobile Studio also supports pasting images and annotating screenshots to communicate a desired result or a problem more precisely.

Agent tools cover several parts of asset preparation:

- Creating procedural textures: solid colors, gradients, checkerboards, noise, and flat normal maps.
- Generating and editing images when an image provider is configured.
- Reading, editing, and packing texture atlases.
- Creating tilesets and editing tilemap layers and cells.
- Validating and importing GLB/glTF files, and inspecting model structure, materials, skeletons, and animation clips.
- Changing PBR parameters and assigning textures to model materials.
- Searching online reference material and downloading assets into the project for subsequent validation.

The available tools depend on the platform. Importing and configuring an existing 3D model is supported; rig creation and skeletal keyframe editing require separate tools.

### Game development harness

We added the built-in **\`ada-game-builder\`** workflow to help an agent move through the full development cycle, from a game mechanic to a result that can be checked.

It covers scenes and scripts, assets, desktop and touch controls, HUDs, restarting the game, and verification. For longer tasks, the workflow uses project notes about design and progress to preserve decisions between sessions.

Studio ships with skills for 3D assets, materials, animations, and UI forms. An agent can find and read the relevant instructions as it works. Mobile Studio can also import custom Markdown skills and store persistent instructions.

### Checking results and fixing errors

An agent can start builds, read diagnostics and logs, validate scenes, and run isolated simulations. Mobile simulation lets it supply keyboard input, advance a game by several frames, and inspect entity positions and component values.

Visible Play and completed GPU-frame capture are available for visual checks. On mobile, the agent can send a captured frame to a configured vision model for analysis. Desktop tools also expose CPU metrics and profiler recordings for embedded game sessions.

Builds, simulation, and visible execution check different aspects of a project. Logic checks help find behavioral errors; rendering, audio, networking, and touch interaction need to be checked in Play.

### Mobile agents and background tasks

On iPhone and iPad, the agent runs inside Studio and uses tools scoped to the current project. You can select a provider and model, configure step limits and repair attempts after a failed check, and choose whether Play opens automatically.

On iOS/iPadOS 26, user-started tasks can continue in the background through the system's continued processing mechanism. An activity shows the current phase, duration, and errors. The system controls available background time; Play rendering and frame capture require the app to be open.

## A2UI: interactive tools inside the chat

**A2UI** lets an agent respond with an interactive interface. The agent describes a form declaratively, and Studio renders it with native AdaUI components inside the conversation. Elements can appear incrementally as the response arrives.

Our forms catalog includes text, rows, columns, buttons, input fields, toggles, selectors, and numeric sliders. Values are bound to the form's data model. Required fields and allowed ranges are validated locally: errors appear beside the inputs, and an invalid form cannot be submitted.

::video[Native A2UI controls](showcases/adaengine-1-0-0/a2ui-controls.mp4 "A2UI in Studio: an NPC role selector, dialog toggle, and slider. The form uses demonstration data; the video shows local controls." poster="showcases/adaengine-1-0-0/a2ui-controls.png")

### From a form to a game interface

For example, you can ask an agent to prepare an NPC configuration form with a name, behavior parameters, and dialog options. When you submit the form, its values return to the original session, and the agent continues with your choices.

A generated UI preview can be opened with **Open in UI Designer**. Studio creates a regular \`.ui\` project asset that you can edit visually or in YAML, save, and include in your game. Export preserves native components, bindings, current values, and form validation. Button actions connect to application logic through the usual AdaUI mechanisms.

On iPhone, **Open UI Source** opens the exported asset in the file editor. This hands the interface over to the project; later manual Designer changes are not automatically sent back to the agent.

![An A2UI form in UI Designer](showcases/adaengine-1-0-0/ui-designer-npc.png "NPCProfile.ui: a form exported from A2UI and opened in the regular UI Designer.")

### Scene tools

A chat card can become a small editor tool. An agent might create an NPC placement card with a copy count and spacing, or a color card with a system color picker and an Apply button.

Supported local actions run directly in Studio without another model request. Cards can duplicate an entity subtree, change a registered color field, or apply several scene edits in one transaction.

Studio checks the scene revision before applying an edit. If the document changed independently, a stale card asks for refreshed data. Desktop changes enter the regular Undo/Redo history; an iPhone card stores the information needed to undo its latest application. These changes affect the scene being edited; an already running Play session must be restarted.

### Native UI on desktop and iPhone

The same cards are available in macOS ACP chat and embedded iPhone chat. Their state and entered values are saved with the session. Form submissions return to the conversation that created them and preserve the current message draft.

Inside the engine, the integration is provided by **\`AdaA2UI\`**, an A2UI v0.9.1 adapter with its own forms catalog. It can be added to AdaUI applications and connected to an agent through event callbacks. Interactive responses can therefore become part of your own development tools as well as Studio.

## Studio on desktop and mobile

Desktop Studio provides a workspace with multiple panes, build tools, debugging, and Git integration.

Mobile Studio is adapted for iPhone and iPad. On iPhone, project navigation, files, code, scenes, Play, and chat have dedicated screens. iPad offers a wider workspace.

AdaScript projects can be edited and run in the embedded runtime on a mobile device, making phones and tablets useful for prototyping and testing touch controls.

![Ada Studio mobile](images/studio/mobile-play-device.png "Checking a game in Play on iPhone.")

### Ada Player

**Ada Player** lets you send a supported project from Studio to another device for testing.

Studio discovers Players on the local network, connects through a pairing code, transfers the project, and receives execution messages. This shortens the path between changing a game and checking it on a device.

### visionOS and spatial applications

Version 1.0.0 introduces a foundation for immersive visionOS applications.

AdaEngine can render a world in a fully immersive space, use separate projections for each eye, and support spatial interaction with objects. Compatible devices can use foveated rendering.

AdaUI panels can be placed in spatial windows through the native host. The [Immersive Garden](https://github.com/AdaEngine/Ada/tree/main/Demos/ImmersiveGarden) example combines a game world with control tools. This is a foundation for spatial applications; a full Studio port to visionOS and a general XR export path are still ahead.

## AdaScript: a language for game logic

**AdaScript** is a scripting language integrated with AdaEngine and Ada Studio. It lets you write game logic, define components and systems, attach behavior to entities, and use engine APIs.

The language uses \`.ada\` files and supports functions, classes, structs, collections, and asynchronous operations. It is dynamically typed by default; strict type checking can be enabled for individual files or an entire project.

### Project structure and the .ada directory

An AdaScript project is a regular directory containing source files, assets, and configuration. Scripts with the \`.ada\` extension live in \`Sources/\`, while the hidden \`.ada/\` directory stores project settings and Studio's working data.

A small game project might look like this:

\`\`\`text title="MyGame/"
MyGame/
├── .ada/
│   └── project.json
├── Sources/
│   ├── PlayerController.ada
│   ├── Health.ada
│   ├── GameRules.ada
│   └── HealthRegeneration.ada
└── Assets/
    ├── Scenes/
    │   └── Main.ascn
    ├── Maps/
    │   └── Level.tilemap
    ├── Tiles/
    │   └── Level.tileset
    ├── Textures/
    │   └── Player.png
    └── UI/
        └── HUD.ui
\`\`\`

\`Sources/\` contains game logic: systems, components, resources, and scriptable behavior. \`Assets/\` contains scenes, images, models, audio, tilemaps, and UI assets. These directory paths can be changed in project settings.

The main configuration file is **\`.ada/project.json\`**. It defines the project name, build system, file locations, entry point, runtime plugins, and other settings. Here is a configuration for a 2D game:

\`\`\`json title=".ada/project.json"
{
  "schemaVersion": 3,
  "project": {
    "name": "MyGame"
  },
  "build": {
    "system": "adascript"
  },
  "paths": {
    "sources": "Sources",
    "assets": "Assets",
    "resourceRoots": ["Assets"]
  },
  "runtime": {
    "moduleName": "MyGame",
    "entry": {
      "scene": "Assets/Scenes/Main.ascn"
    },
    "plugins": {
      "preset": "game2d",
      "presetVersion": 1
    }
  },
  "editor": {
    "startupScene": "Assets/Scenes/Main.ascn"
  }
}
\`\`\`

\`build.system\` selects the AdaScript path. \`paths\` defines source and asset locations, \`runtime.entry.scene\` selects the game's initial scene, and \`runtime.plugins\` controls the available engine features. The \`game2d\` and \`game3d\` presets can be extended through \`enable\` and \`disable\`. \`editor.startupScene\` specifies a fallback scene for execution inside the editor.

The same file stores named input actions in \`inputActions\`, launch parameters, and runtime window settings. The main fields are available through **Project Settings**, so everyday configuration can be done in Studio's interface.

Additional files and directories appear inside \`.ada/\` as you work:

- \`workspace/\` — open-document state and project agent sessions.
- \`chat-ui/\` — additional A2UI card state and undo data in mobile Studio.
- \`libraries.lock.json\` — AdaScript dependencies pinned to exact Git commits.
- \`libraries/\` — the installed source files of those libraries.
- \`cli-build/\` — the build cache created by the CLI.
- \`android-signing/\` — development-signing keys for Android APKs, created during export.
- \`publication-images/\` — the cover and screenshots selected for publishing from Studio.

The relevant tools create these directories as needed. \`project.json\` describes the game, while \`workspace/\` and \`cli-build/\` support editing and builds. A library lockfile can be saved to restore pinned versions on another computer; keeping \`libraries/\` alongside it lets you share a project with dependencies already installed for offline work.

In a portable AdaScript project, Studio's host provides the application lifecycle, so a separate \`main()\` and \`Package.swift\` are not needed. Swift projects additionally use \`Package.swift\` and connect AdaScript through a build plugin. Exports go to \`Exports/macOS\`, \`Exports/Web\`, or \`Exports/Android\` by default.

### Annotations

Annotations connect AdaScript declarations to the engine:

- \`@system\` registers an ECS system.
- \`@component\` and \`@resource\` describe game data.
- \`@query\` and \`@res\` provide access to components and resources.
- \`@scriptable\` attaches behavior to an entity.
- \`@export\` makes behavior fields persistent and editable in the Inspector.
- \`@tool\` declares a Studio tool with its own \`.ui\` panel and editor actions.
- Network annotations describe commands, RPCs, and replicated components.

### What id means in annotations

\`id\` is a declaration's stable name in the engine. In \`@component(id: "game.health")\`, for example, \`game.health\` identifies the Health component type. That type can be attached to many entities, each with its own health values and numeric \`entity.id\`.

Identifiers are used for registration, Swift-side data lookup, scriptable behavior persistence, system ordering, and network schemas. An explicit \`id\` lets you rename a class in source code while keeping its external identity. Changing the ID itself requires updating references and accounting for previously saved data.

The \`game.\` prefix is a useful naming convention. It does not create a language namespace. A library can choose its own prefix, such as \`combat.health\`, to avoid collisions with game declarations.

A \`@system\` ID defaults to the class name; an explicit ID is useful for \`@after\` and \`@before\`. An ID is required for \`@scriptable\`, \`@tool\`, and network declarations such as \`@network_command\`, \`@rpc\`, and \`@replicated_component\`. Where supported, \`version\` separately describes the declaration or schema version. Identifiers must be unique within their respective registry.

### Entity data: @component

A component stores data for an individual entity. Each character can have its own current and maximum health:

\`\`\`adascript title="Health.ada"
@component(id: "game.health")
struct Health {
    @export var current = 100.0;
    @export var maximum = 100.0;
}
\`\`\`

### Entity behavior: @scriptable

\`@scriptable\` describes behavior that can be attached to an entity in a scene. This example moves a character horizontally, with \`speed\` exposed in Studio's Inspector:

\`\`\`adascript title="PlayerController.ada"
@scriptable(id: "game.player-controller")
class PlayerController {
    @export var speed = 5.0;

    @component(required: true)
    var transform: Transform;

    @res
    var input: Input;

    func update(context) {
        var right = input.getActionStrength("MoveRight");
        var left = input.getActionStrength("MoveLeft");
        var direction = right - left;
        var distance = direction * speed * context.deltaTime;

        var position = transform.position;
        position[0] += distance;
        transform.position = position;
    }
}
\`\`\`

\`@component(required: true)\` binds the property to the Transform of the entity the script is attached to. \`@res\` provides the current world's Input resource. The \`MoveLeft\` and \`MoveRight\` actions are configured in **Project Settings → Input Bindings**; this example requires the Input plugin to be enabled.

\`@scriptable\` supports \`ready(context)\`, \`update(context)\`, \`fixedUpdate(context)\`, \`event(events, context)\`, and \`destroy(context)\`. \`ready\` runs when behavior is attached, and \`destroy\` runs when it is removed. Asynchronous tasks can wait for asset loading, the next frame, or a timer while remaining associated with the game object's lifecycle.

### Shared world settings: @resource and @res

A resource stores shared world data. For example, health regeneration speed can be moved from individual characters into game rules:

\`\`\`adascript title="GameRules.ada"
@resource(id: "game.rules", autoInsert: true)
struct GameRules {
    @export var healthRegenPerSecond = 5.0;
}
\`\`\`

In a SwiftPM project, \`AdaScriptBuildPlugin\` generates backing types for components and resources. \`autoInsert: true\` inserts the resource into the world before systems are installed. A system or scriptable behavior can then access it with \`@res var rules: GameRules;\`.

### Systems and scheduling: @system

\`@system\` registers a class as an ECS system. Its \`update(context)\` method is called by the selected **scheduler**, a stage in the world's system execution cycle. The \`scheduler\` parameter selects that stage, and \`context.deltaTime\` provides its current time step.

The standard cycle includes:

- \`startup\` — initialization once on the scheduler runner's first update; it runs again when the world is restarted.
- \`preUpdate\` — the stage before the main update.
- \`update\` — the main game logic stage and the default when \`scheduler\` is omitted.
- \`postUpdate\` — the stage after the main update.

A startup system can create an entity with components from our project:

\`\`\`adascript title="GameSetup.ada"
@system(scheduler: "startup", id: "game.setup")
class GameSetup {
    func update(context) {
        context.world.spawn([Transform(), Health()]);
    }
}
\`\`\`

Even in \`startup\`, the system entry point is named \`update(context)\`. The class constructor creates the script instance; the startup system gets access to the game world and performs initial setup. The HealthRegeneration system below uses \`update\` and executes its logic whenever that stage runs.

Ordering can be expressed with \`@after\` and \`@before\`, using another system's ID:

\`\`\`adascript title="System ordering"
@after(id: "game.health-regeneration")
@system(scheduler: "update", id: "game.health-observer")
class HealthObserver {
    func update(context) {
        // Logic that runs after HealthRegeneration.
    }
}
\`\`\`

Both systems must belong to the same AdaScript module and scheduler. Unknown IDs, self-dependencies, and cycles are rejected during validation. Additional schedulers can be set up on the Swift side of the host. The \`fixedUpdate(context)\` callback on \`@scriptable\` belongs to the behavior lifecycle; it is a separate mechanism from these standard stages.

### Working with many entities: @query

A system accesses matching entities through \`@query\`. Here it updates every Health component using the shared GameRules resource from the previous example:

\`\`\`adascript title="HealthRegeneration.ada"
@system(scheduler: "update", id: "game.health-regeneration")
class HealthRegeneration {
    @query(Health)
    var characters;

    @res
    var rules: GameRules;

    func update(context) {
        var amount = rules.healthRegenPerSecond
            * context.deltaTime;

        for (var entity in characters) {
            if (entity.health.current < entity.health.maximum) {
                var next = entity.health.current + amount;

                if (next > entity.health.maximum) {
                    next = entity.health.maximum;
                }

                entity.health.current = next;
            }
        }
    }
}
\`\`\`

\`@system\` registers the system with the scheduler, while \`@query(Health)\` selects active entities with a Health component. Inside the loop, the component is available as \`entity.health\`; writing a field updates ECS storage. This is useful for shared logic that processes many objects.

A query can fetch several components and apply filters. If the project registers Player and Frozen components, a system can declare this query:

\`\`\`adascript title="A query with filters"
@query(Health, Transform, with: Player, without: Frozen)
var players;
\`\`\`

Its rows expose \`entity.health\` and \`entity.transform\`. Filters check component presence: the query includes entities with Player that do not have Frozen. Query row data is valid during the current iteration; keep the values you need between system updates rather than retaining row references.

### Asynchronous logic: async/await

AdaScript can express a sequence of operations with **\`async func\`** and **\`await\`**. Waiting suspends that task while the game continues updating. A regular callback starts such a function with \`Tasks.start(...)\`:

\`\`\`adascript title="DelayedAnnouncement.ada"
async func announceLater() {
    await Time.sleep(1.0);
    System.print("One game-time second passed");

    await Tasks.nextFrame();
    System.print("The next frame is ready");
}

@system(id: "game.announcement")
class AnnouncementSystem {
    var started = false;

    func update(context) {
        if (!started) {
            started = true;
            Tasks.start(announceLater());
        }
    }
}
\`\`\`

\`Time.sleep\` uses scheduler game time and stops advancing when the scheduler is paused. \`Time.sleepRealTime\` uses a monotonic clock; the task still resumes at a dispatch point in the scripting runtime. \`Tasks.nextFrame\` waits for the next frame. \`Tasks.start\` returns a handle with \`status()\` and \`cancel()\`.

Asynchronous operations are also available for assets. Loading an image returns a result that can be checked after \`await\`:

\`\`\`adascript title="Asynchronous asset loading"
async func loadPlayerTexture() {
    var result = await Assets.loadAsync(
        "@res://Textures/Player.png"
    );

    if (result.isSuccess()) {
        System.print("Player texture is ready");
    } else {
        System.print(result.message());
    }
}
\`\`\`

Start this function with \`Tasks.start(loadPlayerTexture())\` as well. Operations that can fail expose \`isSuccess()\`, \`value()\`, \`errorCode()\`, and \`message()\`. Saves provides asynchronous persistence operations, and \`Tasks.promise()\` can connect a wait to the result of another callback.

The \`update(context)\` methods and \`@scriptable\` callbacks remain synchronous; they start a separate async function. Contexts, query rows, resource views, and commands are valid only within the callback. Pass independent values into a task, such as a number, a string, or a copy of the data you need. Types whose lifetime is tied to a callback can be marked \`@nonsendable\`; the runtime also checks transferred values. Continuations execute in the serialized scripting runtime, rather than on a background I/O thread.

### Accessing AdaScript data from Swift

In a SwiftPM project, \`AdaScriptBuildPlugin\` generates backing types for AdaScript components and resources, and the generated plugin registers them with the engine. The names of those Swift types are an internal generation detail. Integrations should use the declaration name or its stable ID, such as \`Health\` or \`game.health\`.

After installing \`AdaScriptPluginsGenerated()\`, a component can be retrieved from the same world by ID and its reflected fields read. Here, \`world\` is the game World and \`playerID\` identifies an existing entity with Health:

\`\`\`swift title="Reading Health from Swift"
import AdaECS

if let component = world.getComponent(
    named: "game.health", from: playerID
), let descriptor = ComponentReflectionRegistry.descriptor(
    named: String(reflecting: type(of: component))
) {
    let fields = descriptor.readPayload(from: component)
    if case .double(let current)? = fields["current"] {
        print("Health:", current)
    }
}
\`\`\`

Similarly, \`world.getResource(named: "game.rules")\` returns a registered resource as \`any Resource\`. The scripting bridge provides an SPI for reading a specific field of a generated resource:

\`\`\`swift title="Reading GameRules from Swift — SPI"
@_spi(Scripting) import AdaECS

if let resourceType = RuntimeTypeRegistry.resourceType(
    named: "game.rules"
), let descriptor = RuntimeResourceReflectionRegistry
    .descriptor(for: resourceType),
   let field = descriptor.fields.first(where: {
       $0.key == "healthRegenPerSecond"
   }),
   case .double(let rate)? = world.readResourceField(
       type: resourceType, field: field
   ) {
    print("Regeneration per second:", rate)
}
\`\`\`

The SPI supports scripting bridge integrations and can change separately from the public API. Read data during a coordinated world access phase, such as a Swift system that declares access to the relevant data. The resulting values can be passed to Swift UI code or other game logic.

Runtime-defined components in the portable runtime and AOT use a world-local schema and payload. They can be read without knowing the generated Swift type:

\`\`\`swift title="A runtime component from Swift"
import AdaECS

if let schema = world.runtimeComponentDescriptor(
    named: "game.health"
), let health = world.getRuntimeComponent(
    schema.componentID, from: playerID
), let index = schema.fields.firstIndex(where: {
    $0.key == "current"
}) {
    print(health.values[index])
}
\`\`\`

In native AOT, scalar resources declared by the compiled module are stored in the public \`AdaScriptNativeResources\` resource container. Its \`values\` is indexed first by resource ID, then by field name:

\`\`\`swift title="A native AOT resource from Swift"
import AdaECS
import AdaScripting

let rules = world.getResource(AdaScriptNativeResources.self)
let rate = rules?.values["game.rules"]?["healthRegenPerSecond"]
print(rate as Any)
\`\`\`

This last path applies to builds with native AOT support. If data is originally declared in Swift, it can be retrieved through regular typed ECS APIs, while AdaScript binds the same data with \`@query\`, \`@component\`, and \`@res\`. Choose the API that matches how your project registers its data.

### Studio tools: @tool

Studio on macOS lets you create **custom tools in AdaScript**: add a panel to the right sidebar, bind its controls to script fields, and perform actions on the open scene. \`@tool\` describes the tool, \`.ui\` defines its interface, and AdaScript methods implement its behavior.

Tools live beside the game in a dedicated project directory:

\`\`\`text title="Tool module"
Tools/
└── LevelHelper/
    ├── LevelHelper.ada
    └── LevelHelper.ui
\`\`\`

Each directory directly inside \`Tools/\` forms a module. Its \`.ada\` files and relative imports are compiled together. The reserved \`Tools/\` directory is excluded from game script loading: the tool runs in the editor rather than becoming a game system.

For example, **Level Helper** creates a row of entities with Transform. Its annotation defines a stable ID, name, version, API version, and document permissions; \`activate(editor)\` registers the panel:

\`\`\`adascript title="LevelHelper.ada"
@tool(
    id: "studio.level-helper",
    name: "Level Helper",
    version: "1.0.0",
    api: 1,
    platforms: ["macos"],
    permissions: [
        "editor.documents.read",
        "editor.documents.write"
    ]
)
class LevelHelper {
    @export var count = 3.0;
    @export var status = "Open a scene, then Generate.";

    func activate(editor) {
        editor.addPanel(
            id: "level-helper",
            title: "Level Helper",
            location: "right",
            ui: "LevelHelper.ui"
        );
    }

    func generate(editor) {
        if (editor.scenePath == "") {
            status = "Open a scene first.";
            return;
        }

        var total = Math.clamp(count, 1.0, 32.0);
        var i = 0;
        while (i < total) {
            editor.createEntity(
                name: "Generated " + (i + 1),
                x: i * 48.0,
                y: 0.0
            );
            i += 1;
        }
        status = "Generated " + total + " entities.";
    }
}
\`\`\`

The \`LevelHelper.ui\` path is resolved relative to the declaring \`.ada\` file and must remain inside the module. In Studio API 1, a tool can register up to eight right-sidebar panels with unique IDs. The host removes them when the tool is disabled or its project closes; the script can additionally implement \`deactivate()\` if needed.

The interface uses the regular \`.ui\` format and can be edited in UI Designer. Our example needs a slider, a button, and a result label:

\`\`\`yaml title="LevelHelper.ui"
format: ada.ui
schemaVersion: 1
inputs:
  - name: count
    type: number
    defaultValue: 3
  - name: status
    type: string
    defaultValue: Ready
actions:
  - name: generate
root:
  id: level-helper
  type: VStack
  arguments:
    spacing: {value: 12}
  children:
    - id: count
      type: Slider
      arguments:
        value: {binding: count}
        min: {value: 1}
        max: {value: 32}
        step: {value: 1}
    - id: generate
      type: Button
      arguments:
        title: {value: Generate}
      actions:
        action: generate
    - id: status
      type: Text
      arguments:
        text: {binding: status}
\`\`\`

Each input binds to an \`@export\` field with the same name and a compatible type. Strings, booleans, integers, and floating-point numbers are supported. The panel starts with the script instance's values; \`.ui\` \`defaultValue\` fields are used for Designer previews. Before an action, control values are copied to the tool's fields, and after it finishes, values are copied back to the interface. The \`generate\` action calls \`func generate(editor)\`; tool callbacks are synchronous.

**Scene changes are applied as one batch.** \`editor.createEntity(...)\` stages entities, and Studio applies them only after the callback succeeds. In this example, one Generate creates the entire row, one Undo removes it, Redo restores it, and regular Save persists the scene. If the callback fails or the original scene has changed, the staged batch is not applied. \`editor.scenePath\`, \`editor.sceneRevision\`, and \`editor.entityCount\` are also available; an action can create up to 256 entities.

**Studio manages enablement and access.** Tools are disabled by default. The wrench button opens Studio Tools; before running code or displaying \`.ui\`, Studio asks you to review permissions and choose **Allow and Enable**. Versions, enablement, and access settings live in **Settings → Project → Studio Tools**. **Revoke Access** immediately removes panels and cancels pending actions. Consent is stored locally for each project; changes to the source location, API, platforms, or requested permissions require consent again.

The current runtime implements \`editor.documents.read\` and \`editor.documents.write\`. The static schema can describe a wider permission set, but this host does not yet expose network, process, clipboard, or workspace file APIs.

**Reload lets you refine a tool without closing the project.** A valid \`.ui\` reload preserves entered values. A successful script reload replaces its instance and registrations; an invalid script or interface keeps the previous working version active and reports diagnostics. The runtime bounds callback execution time, loops, memory, and recursion.

This layer is available **on macOS**. iPadOS support, command, menu, and formatter registration, async callbacks, and marketplace distribution remain future steps. Panels use \`.ui\`.

The [Studio Tools documentation](https://github.com/AdaEngine/Ada/blob/main/Editor/Documentation/StudioTools.md) covers lifecycle, bindings, scene access, and reload. You can copy the [complete Level Helper example](https://github.com/AdaEngine/Ada/tree/main/Editor/Documentation/Examples/StudioTools/LevelHelper) into your project's \`Tools/LevelHelper/\` directory.

### AdaScript addons: reusable libraries

Game logic can be packaged as an **AdaScript addon**, a library of functions, ECS systems, and scriptable behavior. Shared damage logic, inventory systems, or a character controller can be reused across games.

A library lives in a separate repository. Its root contains \`ada-library.json\`, which describes its identifier, version, source files, and dependencies:

\`\`\`text title="CombatAddon/"
CombatAddon/
├── ada-library.json
└── Sources/
    └── Damage.ada
\`\`\`

\`\`\`json title="ada-library.json"
{
  "schemaVersion": 1,
  "id": "example.combat",
  "version": "1.0.0",
  "api": 1,
  "sources": ["Sources/Damage.ada"],
  "dependencies": []
}
\`\`\`

\`sources\` lists all library source files, including imported helper files. For example, \`Damage.ada\` might contain this function:

\`\`\`adascript title="CombatAddon/Sources/Damage.ada"
func applyDamage(current, damage) {
    var remaining = current - damage;
    if (remaining < 0) {
        return 0;
    }
    return remaining;
}
\`\`\`

In Studio, open **Settings → Project → AdaScript Libraries**, enter a public GitHub repository and a tag or commit, then select **Install / Update**. Rebuild the game or restart Play after installation. The current provider supports public GitHub repositories.

A function from an installed addon can be imported by library ID, independently of where the game script is located:

\`\`\`adascript title="Importing into a game"
import { applyDamage }
    from "@example.combat/Sources/Damage";

var health = applyDamage(100.0, 25.0); // 75
\`\`\`

Library \`@system\` and \`@scriptable\` declarations participate in normal game module registration. Required engine features are enabled through Runtime Settings. Libraries share the game's module, so their classes, functions, and annotation IDs must have unique names.

Installation stores source files in \`.ada/libraries/\` and exact Git commits in \`.ada/libraries.lock.json\`. Libraries can have their own dependencies, also pinned to specific commits. **Restore Locked Libraries** restores the same set on another computer. Builds and execution use installed sources and do not download libraries automatically.

For a fully offline project, keep both the lockfile and \`.ada/libraries/\`. In a SwiftPM game, \`AdaScriptBuildPlugin\` includes addon sources in the build alongside game scripts. Libraries make it easier to share reusable logic while keeping dependencies reproducible.

### Hot reload

Studio can update supported AdaScript game logic during execution. If a new script version contains an error, the previous version continues running.

This shortens the feedback loop for behavior changes. Data schema changes and other incompatible edits may require restarting the game.

### The new AOT compiler

The release includes an **experimental AOT path** for AdaScript.

Supported code is compiled ahead of time into native code. The path covers ECS integration, scriptable object lifecycles, and asynchronous coroutine tasks.

Studio uses it to export AdaScript projects to macOS, Web, and Android. AOT is currently limited to a supported subset of the language; unsupported constructs produce explicit errors.

## Native Android support

AdaEngine now has a native Android host. Game code runs in Swift, and rendering uses WebGPU through Swan/Dawn over Vulkan.

Standalone Studio on macOS can select Android as a run target, discover a device or emulator, build an APK, install it, and launch the game. Studio can also start a configured Android Virtual Device.

Export supports AdaScript AOT and compatible Swift AdaEngine projects. The current workflow creates development-signed APKs; producing an AAB and publishing to Google Play require a separate process.

![Android Build & Export](showcases/adaengine-1-0-0/android-build-export.png "Configuring the Android SDK, NDK, and JDK in Studio before export and launch.")

## Networking and multiplayer

The new **AdaMultiplayer** module provides infrastructure for local and internet multiplayer.

It includes a host-authoritative model, replication of registered ECS components, typed commands and RPCs, and interpolation of received state.

Transport is separate from game logic. You can use a local connection, the Ada Cloud relay, or a custom transport implementation. AdaScript provides annotations for network data and commands.

This keeps the game model in ECS while making the data shared between participants explicit.

### A replicated component: player state

In AdaScript, a network component is declared with \`@replicated_component\`. It already acts as an ECS component, so an additional \`@component\` annotation is unnecessary. Here is a small example of movement along one axis:

\`\`\`adascript
@replicated_component(
    id: "game.network-player",
    version: 1,
    authority: "host",
    visibility: "all_peers"
)
struct NetworkPlayer {
    @network_field(1) var peer = "";
    @network_field(2, interpolate: "linear") var x = 0.0;
    @network_field(3) var health = 100;
    @local var animationTime = 0.0;
}
\`\`\`

The host stores authoritative state and sends \`peer\`, \`x\`, and \`health\` to participants. Linear interpolation is enabled for the numeric \`x\` coordinate. \`animationTime\` stays local, so each client can use it for its own character animation.

\`id\` identifies the component's network schema. The numbers in \`@network_field(1)\`, \`(2)\`, and \`(3)\` identify fields within that schema. They are stable protocol tags, rather than array indices: preserve a field's tag when renaming it. Compatible builds must agree on \`id\`, \`version\`, field tags, and types.

On the host, a component can be created with a regular ECS command inside a system callback, passing the ID of the participant who owns the player:

\`\`\`adascript
context.world.spawn([
    NetworkPlayer(peer: session.localPeerID)
]);
\`\`\`

Here, \`session\` is the \`AdaScriptMultiplayerState\` resource. For a remote player, the host passes that participant's peer ID instead of \`session.localPeerID\`. The generated creation path for the replicated component adds a replication marker to the entity; no manually assembled snapshot is needed.

### Working with a component and declaring an RPC

A peer sends movement intent, and the host calculates the new coordinate. The \`receiveMove\` method is declared as an RPC. Its body records input separately for each sender, which is then applied to the corresponding component through \`@query\`:

\`\`\`adascript
@system(scheduler: "update", id: "game.network-movement")
class NetworkMovementSystem {
    @res var input: Input;
    @res var multiplayer: Multiplayer;
    @res var session: AdaScriptMultiplayerState;
    @query(NetworkPlayer) var players;

    var movementByPeer = [:];

    @rpc(
        id: "game.move-player",
        version: 1,
        direction: "peer_to_host",
        delivery: "unreliable_sequenced",
        channel: "input"
    )
    func receiveMove(@network_field(1) moveX = 0.0) {
        // The transport provides source; the sender cannot supply it.
        if (moveX < -1.0) moveX = -1.0;
        if (moveX > 1.0) moveX = 1.0;
        movementByPeer[source] = moveX;
    }

    func update(context) {
        var moveX = input.getActionStrength("MoveRight")
            - input.getActionStrength("MoveLeft");

        if (session.role == "peer") {
            multiplayer.send(receiveMove(moveX));
            return;
        }
        if (session.role != "host") return;

        // Apply the host player's local input directly.
        movementByPeer[session.localPeerID] = moveX;

        for (var row in players) {
            var movement = movementByPeer[row.networkPlayer.peer];
            if (movement == null) continue;

            // A regular write to the ECS component on the host.
            row.networkPlayer.x += movement * 175.0 * context.deltaTime;
        }
    }
}
\`\`\`

Calling \`receiveMove(moveX)\` constructs a typed command; \`multiplayer.send(...)\` queues it for transmission. The body of \`receiveMove\` executes **on the receiver before \`update\`**, with \`source\` holding the sender ID supplied by the transport. The body is not automatically called on the sending client. The example therefore handles the host's own input directly.

We match \`source\` to the \`NetworkPlayer.peer\` assigned by the host when creating the player. A client controls its own character without selecting someone else's entity through the payload. Input is clamped to −1 through 1; speed and the resulting coordinate are determined by the host. Once \`row.networkPlayer.x\` is updated, replication delivers the state to participants.

\`peer_to_host\` specifies the RPC direction. \`unreliable_sequenced\` suits continuously refreshed input: the next packet replaces a lost one, and stale packets are discarded. Commands that require guaranteed delivery and ordering use \`reliable_ordered\`. Like components, RPCs have stable \`id\`, \`version\`, and parameter tags.

The example assumes the multiplayer runtime is enabled, \`MoveRight\` / \`MoveLeft\` actions are configured, and the host creates players as they join the session. It is a foundation for movement logic; a game also needs to clear input on disconnects or timeouts and remove players who leave.

Read more in the documentation:

- [AdaScript: multiplayer schemas and RPCs](https://github.com/AdaEngine/Ada/blob/main/Sources/AdaScripting/AdaScripting.docc/AdaScriptLanguage.md#multiplayer-schemas) — declarations, command transmission, and receiver-side method execution.
- [AdaMultiplayer: runtime setup and transports](https://github.com/AdaEngine/Ada/blob/main/Sources/AdaMultiplayer/AdaMultiplayer.docc/AdaMultiplayer.md) — plugin configuration, entity replication, and network sessions in Swift.

![Medieval Arena](showcases/adaengine-1-0-0/medieval-arena.png "Medieval Arena: a 2D AdaScript game with network gameplay logic.")

## New AdaUI features

AdaUI has grown alongside Studio.

The animation system now includes transactions, \`withAnimation\`, binding animation, and selected-value changes. Navigation, tabs, sheets, and full-screen presentations have built-in transitions.

We also improved text handling, selection, writing directions, clipping, and interface updates.

A major addition is the **visual UI Designer**. Interfaces can be built as \`.ui\` assets, with editable hierarchies, properties, and modifiers, plus inputs, actions, and bindings. UI elements can bind to exported fields of gameplay behavior.

AdaUI is used in both games and Studio itself, continuously testing the framework against complex interfaces.

::video[AdaUI Kanban](showcases/adaengine-1-0-0/adaui-kanban.mp4 "AdaUI in practice: an interactive Kanban board. Recording from the engine's demo gallery." poster="showcases/adaengine-1-0-0/adaui-kanban.png")

## 2D improvements

Our 2D work focused on level creation and rendering correctness.

Tilemaps now have a complete workflow in Studio: tilesets, palettes, layers, map editing, and geometry configuration for lighting and shadows.

For sprites, we improved batching, size handling, and culling updates. Texture atlas tools are now part of the editor's asset workflow, making graphics easier to prepare and use.

::video[Sprite rendering](showcases/adaengine-1-0-0/sprite-rendering.mp4 "A 2D example from the engine's demo gallery, with many sprites in one game world." poster="showcases/adaengine-1-0-0/sprite-rendering.png")

## A major 3D update

AdaEngine's 3D capabilities have expanded substantially.

![Skeletal Garden](images/studio/skeletal-garden.png "Skeletal Garden: animated characters, materials, lighting, and a 3D game world.")

![Skeletal Garden overview](showcases/adaengine-1-0-0/garden-overview.png "Skeletal Garden: terrain, vegetation, and the central character area.")

### Box3D physics

We added integration with [Box3D](https://github.com/erincatto/box3d), a library for three-dimensional rigid-body physics.

The engine now has 3D bodies, collision shapes, and a character controller. Skeletal Garden uses them for movement, collisions, jumping, and terrain traversal.

::video[3D physics demonstration](showcases/adaengine-1-0-0/physics-3d.mp4 "Interacting 3D objects: a recording from the engine's archived demo gallery." poster="showcases/adaengine-1-0-0/physics-3d.png")

### Models and animation

GLB/glTF support covers model hierarchies, PBR materials, skeletons, and animation clips. GPU skinning and independent animation playback for model instances have been added.

Animation graphs support clip blending, additive layers, bone masks, and animation events. They can be edited and previewed in Studio.

### Lighting and effects

PBR rendering, image-based lighting, local lights, and shadows continue to develop.

We added cascaded directional shadows, **SSAO**, FXAA, and per-camera environment settings. SSAO adds depth where objects meet, while IBL uses the environment for lighting and reflections.

Move the slider to compare actual frames of the same scene with SSAO disabled and enabled.

::compare[SSAO: contact shadows in Skeletal Garden](showcases/adaengine-1-0-0/garden-no-ssao.png showcases/adaengine-1-0-0/garden-ssao.png "Without SSAO" "SSAO")

### MetalFX

Supported Metal devices can use spatial upscaling and temporal reconstruction through **MetalFX**.

The temporal path uses frame history and motion vectors from the camera, objects, and skeletal animation. UI is composited after image reconstruction and retains the output resolution.

::compare[MetalFX: spatial and temporal reconstruction, macOS / Metal](showcases/adaengine-1-0-0/garden-metalfx-spatial.png showcases/adaengine-1-0-0/garden-metalfx-temporal.png "Spatial" "Temporal")

These static frames are useful for inspecting detail. Temporal reconstruction quality in motion and rendering cost require separate measurements.

### WebGPU

WebGPU continues to develop as a portable graphics backend for AdaEngine. It is used for Web targets and by the native Android host over Vulkan.

Effect availability depends on the platform and backend capabilities.

![Skeletal Garden on WebGPU](showcases/adaengine-1-0-0/garden-webgpu.png "A Skeletal Garden frame from a native WebGPU run.")

## Performance

We reworked important ECS paths: entity creation, component composition changes, and query iteration. This included reducing unnecessary copies, ARC operations, and allocations, as well as correcting component lifetimes.

A local Release benchmark operating on **4,000 entities** produced these median CPU times:

- **Entity creation:** 179.18 ms → 4.43 ms.
- **Component insertion and removal:** 592.45 ms → 20.23 ms.
- **InsertCoW workload:** 299.37 ms → 10.13 ms.

These are before-and-after measurements of a specific ECS storage optimization. They were taken on Apple arm64 with Swift 6.2.4 in Release, using three warmups and 30 measured samples. They describe those workloads, rather than an overall FPS improvement or a comparison of every feature across releases. [Methodology and full results](https://github.com/AdaEngine/Ada/blob/main/Documentation/Performance/ECSStorageInPlace.md).

Studio also gained a **Performance panel and Timeline**: CPU update time, entity count, process memory, ECS system durations, and an event history with Chrome Trace export. This helps locate causes of delays while developing a game.

![Performance Timeline](showcases/adaengine-1-0-0/performance-timeline.png "A recorded CPU Timeline: world updates, ECS, and render graph nodes.")

## Ada Cloud and user-created games

**Ada Cloud** expands the ways games can be distributed.

UGC supports persistent versions, fixed files and metadata, moderation, and publication history. Each new version is reviewed separately, while the currently approved game remains available until its update is approved.

Community in Studio lets you discover games, read descriptions, view screenshots, and run supported AdaScript publications in the embedded player. Compatible multiplayer games offer Solo, Host, and room-code joining.

[Ada Store](https://store.adaengine.org/store) is also growing as a catalog of assets, scripts, templates, and tools. It complements the game library with materials for building your own projects.

## Automation through the CLI

Standalone Studio on macOS includes the **\`adastudio\` CLI**.

This is an important part of working with **AI agents**. An agent needs a way to check its changes: read project configuration, find script errors, and produce a build. The CLI provides that path through the terminal without opening a Studio window or connecting to its embedded chat. The same commands work for manual use and CI.

The CLI uses Studio's own project validator, AdaScript builder, and exporter. An agent works with saved files and receives results in a format suited to automation:

- \`doctor\` checks for the Build SDK and build tools.
- \`project inspect\` reads project configuration and structure without rewriting metadata.
- \`validate\` checks AdaScript, the entry scene, and runtime bindings.
- \`build\` packages an AdaScript game as a macOS application.
- \`export\` creates a supported build for macOS, Web, or Android.

For example, an agent can check a project and build it after making corrections:

\`\`\`bash title="Validating and building an AdaScript project"
STUDIO="/Applications/Ada Studio.app/Contents/MacOS/adastudio"

"$STUDIO" doctor --format json
"$STUDIO" project inspect --project ./MyGame --format json
"$STUDIO" validate --project ./MyGame --format json

"$STUDIO" build --project ./MyGame \\
  --target macos --configuration release \\
  --output ./Build/MyGame --format json
\`\`\`

With \`--format json\`, stdout contains one report with \`ok\`, \`exitCode\`, \`diagnostics\`, and paths to \`artifacts\`. Tool logs go separately to stderr. Diagnostics include an error code, message, and, when the compiler supplies them, a file, line, and column. An agent can locate the problem, make a correction, and repeat the check. Exit codes distinguish an invalid project from a missing toolchain or a build failure.

This creates a repeatable **edit → validate → fix → build** cycle. In CI, it helps check changes before human review and preserve artifacts for later execution. A successful \`validate\` checks code and configuration; gameplay, rendering, and controls are checked separately in simulation and visible Play. For SwiftPM projects, this command validates metadata and layout; the actual scope is reported in \`details.validationScope\`.

### Comparison with Unity CLI

The approach will be familiar to Unity developers: the editor supports batch-mode automation, and the modern **Unity CLI** offers \`unity build\`, \`unity test\`, and \`unity run\`, along with JSON output. A macOS game build can be expressed like this:

\`\`\`bash title="Unity CLI example"
unity build ./MyUnityGame --target StandaloneOSX \\
  --output-path ./Build/MyUnityGame.app --format json
\`\`\`

Unity CLI launches the required editor in batch mode; builds can use the built-in path, a Build Profile, or a custom C# method. In Ada Studio, validation and export commands are bundled with the standalone app and use its project pipeline without starting the windowed runtime. In both cases, agents benefit from explicit commands, structured results, and repeatable operations. [Unity CLI documentation](https://github.com/Unity-Technologies/skills/blob/main/skills/unity-cli/references/build-run-test.md), [Unity batch mode](https://docs.unity.com/en-us/engine/6000.3/manual/building-and-publishing/build-command-line).

Commands and current capabilities are described in the [Ada Studio CLI documentation](https://github.com/AdaEngine/Ada/blob/main/Editor/Documentation/CLI.md). Builds require the relevant platform tools; Web export additionally uses a compatible Swift WebAssembly SDK.

## Let's make games

AdaEngine remains an open-source Swift project under the MIT license.

Version 1.0.0 brings together the engine, visual tools, scripting language, AI workflows, and distribution infrastructure. For us, it is a significant step toward an environment where it is easy to experiment, build games, and share them.

Explore the [examples](/demos), try [Studio](/studio), and join [AdaEngine on GitHub](https://github.com/AdaEngine/Ada) through code, documentation, games, and feedback.

**Let's make games with Swift and AdaScript.**
`,Gs=[{name:"Vladislav Prusakov",description:"AdaEngine Founder, iOS Engineer",username:"SpectralDragon",avatar:"authors/spectraldragon.jpg",socials:[{username:"SpectralDragon",social:"github"},{username:"SpectralDragon_",social:"twitter"}]}],Fs={},js=Gs,Hs=Fs?Object.assign({"./content/articles/introducing-adaengine-0-1-0.md":Bs,"./content/articles/introducing-adaengine-1-0-0.md":Us}):{};function Ws(e){const n=e.replace(/\r\n/g,`
`);if(!n.startsWith(`---
`))return{frontmatter:{},body:n.trim()};const t=n.indexOf(`
---
`,4);if(t===-1)return{frontmatter:{},body:n.trim()};const i=n.slice(4,t),o=n.slice(t+5).trim(),c={};let s=null;for(const r of i.split(`
`)){const l=r.trim();if(!l){s=null;continue}if(l.startsWith("- ")&&s){const y=c[s],w=jn(l.slice(2).trim()),v=Array.isArray(y)?y:[];v.push(w),c[s]=v;continue}const d=r.indexOf(":");if(d===-1){s=null;continue}const u=r.slice(0,d).trim(),m=r.slice(d+1).trim();if(!m){c[u]=[],s=u;continue}c[u]=jn(m),s=null}return{frontmatter:c,body:o}}function jn(e){return e.startsWith("[")&&e.endsWith("]")?e.slice(1,-1).split(",").map(n=>n.trim().replace(/^['"]|['"]$/g,"")).filter(Boolean):e==="true"?!0:e==="false"?!1:e.replace(/^['"]|['"]$/g,"")}function H(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function qe(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}function $t(e){return/^https?:\/\//.test(e)}function ln(e){return e.trim().replace(/^@/,"").toLowerCase()}function qs(e){var t;if(typeof e.url=="string")return e.url;if(typeof e.profileUrl=="string")return e.profileUrl;const n=(t=e.socials)==null?void 0:t.find(i=>i.social==="github");if(typeof(n==null?void 0:n.url)=="string")return n.url;if(typeof(n==null?void 0:n.username)=="string")return`https://github.com/${n.username.replace(/^@/,"")}`;if(typeof e.username=="string")return`https://github.com/${e.username.replace(/^@/,"")}`}function zs(e,n){if(typeof e!="string"||!e.trim())throw new Error(`Invalid article author in ${n}`);const t=ln(e),i=js.find(o=>ln(o.username??o.name)===t||ln(o.name)===t);return i?{name:i.name,url:qs(i),avatar:typeof i.avatar=="string"?i.avatar:void 0}:$t(e)?{name:e,url:e}:{name:e}}function Vs(e,n){if(!/^(https?:\/\/|\/|\.\/|\.\.\/|[A-Za-z0-9/_-])/.test(n))return _e(e);const t=H(n),i=$t(n)?' target="_blank" rel="noreferrer"':"";return`<a href="${t}"${i}>${_e(e)}</a>`}function _e(e){return H(e).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>")}function Ks(e,n){let t=0;for(let i=n;i<e.length;i+=1){const o=e[i];if(o==="("){t+=1;continue}if(o===")"){if(t===0)return i;t-=1}}return-1}function ue(e){let n="",t=0;for(;t<e.length;){const i=e.indexOf("[",t);if(i===-1){n+=_e(e.slice(t));break}const o=e.indexOf("]",i+1);if(o===-1||e[o+1]!=="("){n+=_e(e.slice(t,i+1)),t=i+1;continue}const c=o+2,s=Ks(e,c);if(s===-1){n+=_e(e.slice(t,i+1)),t=i+1;continue}n+=_e(e.slice(t,i)),n+=Vs(e.slice(i+1,o),e.slice(c,s)),t=s+1}return n}function Ys(e){const n=e.toLowerCase();return{ada:"AdaScript",adascript:"AdaScript",js:"JavaScript",javascript:"JavaScript",json:"JSON",md:"Markdown",markdown:"Markdown",sh:"Shell",shell:"Shell",swift:"Swift",ts:"TypeScript",typescript:"TypeScript",yaml:"YAML",yml:"YAML"}[n]??(e?e[0].toUpperCase()+e.slice(1):"Code")}function Zs(e){var o;const n=e.match(/(?:^|\s)(?:title|filename)=["']([^"']+)["']/),t=((o=e.split(/\s+/)[0])==null?void 0:o.replace(/[^\w#+-]/g,""))??"",i=(n==null?void 0:n[1])??e.replace(t,"").trim().replace(/^["']|["']$/g,"");return{language:t,title:i}}function Xs(e,n,t){const i=Ys(n);return`
    <figure class="article-code-block">
      <figcaption>
        <span>${H(t)}</span>
        <span>${H(i)}</span>
      </figcaption>
      <pre><code class="${It(n)}">${Ct(e,n)}</code></pre>
    </figure>
  `}function Js(e){const n=e.match(/^::compare\[([^\]]+)\]\(([^\s)]+)\s+([^\s)]+)\s+"([^"]+)"\s+"([^"]+)"\)$/);if(n){const[,w,v,A,E,k]=n;return`
      <figure class="article-media article-comparison" data-article-comparison>
        <div class="article-comparison-frame" style="--comparison-position:50%">
          <img src="${H(qe(A))}" alt="${H(k)}" loading="lazy" />
          <img class="article-comparison-before" src="${H(qe(v))}" alt="${H(E)}" loading="lazy" />
          <span class="article-comparison-label article-comparison-label-before">${H(E)}</span>
          <span class="article-comparison-label article-comparison-label-after">${H(k)}</span>
        </div>
        <input type="range" min="0" max="100" value="50" aria-label="${H(w)}" aria-valuetext="50% ${H(E)}" data-article-comparison-range data-before-label="${H(E)}" />
        <figcaption>${ue(w)}</figcaption>
      </figure>
    `}const t=e.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/),i=e.match(/^::video\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?(?:\s+poster="([^"]+)")?\)$/),o=t??i;if(!o)return null;const[,c,s,r,l]=o,d=qe(s),u=r||c,m=!!i||/\.(mp4|webm|ogg|mov)$/i.test(s),y=m?`<video controls playsinline preload="metadata"${l?` poster="${H(qe(l))}"`:""} src="${H(d)}">${H(c)}</video>`:`<img src="${H(d)}" alt="${H(c)}" loading="lazy" role="button" tabindex="0" aria-label="Open image fullscreen" data-article-lightbox-image />`;return`
    <figure class="article-media ${m?"article-media-video":"article-media-image"}">
      ${y}
      ${u?`<figcaption>${ue(u)}</figcaption>`:""}
    </figure>
  `}function Qs(e){const n=[];let t=!1;const i=()=>{t&&(n.push("</ul>"),t=!1)};for(const o of e){const c=o.trim();if(!c){i();continue}if(c.startsWith("- ")){t||(n.push("<ul>"),t=!0),n.push(`<li>${ue(c.slice(2))}</li>`);continue}i(),n.push(`<p>${ue(c)}</p>`)}return i(),n.join(`
`)}function eo(e,n,t){const i=["note","tip","warning","danger","info"].includes(e)?e:"note";return`
    <aside class="article-callout article-callout-${i}">
      <span class="article-callout-icon" aria-hidden="true">!</span>
      <div>
        <p class="article-callout-title">${ue(n||{danger:"Important",info:"Info",note:"Note",tip:"Tip",warning:"Warning"}[i])}</p>
        ${Qs(t)}
      </div>
    </aside>
  `}function Hn(e,n){const t=e.toLowerCase().replace(/`([^`]+)`/g,"$1").replace(/&[a-z]+;/gi,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"section",i=n.get(t)??0;return n.set(t,i+1),i===0?t:`${t}-${i+1}`}function no(e){const n=e.split(`
`),t=[],i=[],o=new Map;let c=!1,s=!1,r="",l="",d=[],u=!1,m="note",y="",w=[];const v=()=>{c&&(t.push("</ul>"),c=!1)},A=()=>{s&&(t.push(Xs(d.join(`
`),r,l)),s=!1,r="",l="",d=[])},E=()=>{u&&(t.push(eo(m,y,w)),u=!1,m="note",y="",w=[])};for(const k of n){if(k.startsWith("```")){if(v(),E(),s)A();else{const M=Zs(k.slice(3).trim());r=M.language,l=M.title,s=!0}continue}if(s){d.push(k);continue}if(k.trim()===":::"){v(),E();continue}if(u){w.push(k);continue}const T=k.trim();if(!T){v();continue}if(T.startsWith("- ")){c||(t.push("<ul>"),c=!0),t.push(`<li>${ue(T.slice(2))}</li>`);continue}v();const _=T.match(/^:::(note|tip|warning|danger|info)(?:\s+(.+))?$/i);if(_){m=_[1].toLowerCase(),y=_[2]??"",w=[],u=!0;continue}const G=Js(T);if(G){t.push(G);continue}if(T.startsWith("### ")){const M=T.slice(4),L=Hn(M,o);i.push({id:L,title:M,level:3}),t.push(`<h3 id="${H(L)}">${ue(M)}</h3>`);continue}if(T.startsWith("## ")){const M=T.slice(3),L=Hn(M,o);i.push({id:L,title:M,level:2}),t.push(`<h2 id="${H(L)}">${ue(M)}</h2>`);continue}if(T.startsWith("# ")){t.push(`<h1>${ue(T.slice(2))}</h1>`);continue}t.push(`<p>${ue(T)}</p>`)}return v(),A(),E(),{html:t.join(`
`),toc:i}}function _t(e){return e.replace(/^#.*$/gm,"").replace(/```[\s\S]*?```/g,"").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/[*`_>#-]/g,"").replace(/\s+/g," ").trim()}function to(e){return _t(e).slice(0,180)}function ao(e){const n=_t(e).split(" ").filter(Boolean).length;return Math.max(1,Math.ceil(n/180))}function io(e,n){const t=e.title,i=e.slug,o=e.description,c=e.date,s=e.author,r=e.tags,l=e.image,d=e.published,u=e.draft,m=e.featured;if(typeof t!="string"||typeof i!="string"||typeof o!="string"||typeof c!="string")throw new Error(`Invalid article frontmatter in ${n}`);return{title:t,slug:i,description:o,date:c,author:zs(s,n),tags:Array.isArray(r)?r.filter(y=>typeof y=="string"):[],image:typeof l=="string"?l:void 0,published:typeof d=="boolean"?d:!0,draft:typeof u=="boolean"?u:!1,featured:typeof m=="boolean"?m:!1}}const ve=Object.entries(Hs).map(([e,n])=>{const{frontmatter:t,body:i}=Ws(n),o=io(t,e),c=no(i);return{...o,excerpt:to(i),html:c.html,readingTime:ao(i),toc:c.toc}}).filter(e=>e.published&&!e.draft).sort((e,n)=>new Date(n.date).getTime()-new Date(e.date).getTime());ve.filter(e=>e.featured);function so(e){return ve.find(n=>n.slug===e)}const dn={schemaVersion:1,generatedAt:"",repository:"AdaEngine/AdaEngine",commit:null,demos:[]};let Wn=null;const un=new Map;function Dt(e){return/^(https?:|data:|blob:|\/)/.test(e)?e:`${"/".endsWith("/")?"/":"//"}${e.replace(/^\/+/,"")}`}async function Mt(){return Wn??(Wn=fetch(Dt("demos/manifest.json"),{headers:{Accept:"application/json"}}).then(e=>e.ok?e.json():dn).then(e=>({...dn,...e,demos:[...e.demos??[]].map(n=>({...n,title:a(n.title),description:a(n.description),tagTitle:a(n.tagTitle)})).sort((n,t)=>n.tag.localeCompare(t.tag)||n.title.localeCompare(t.title))})).catch(()=>dn)),Wn}async function oo(e){const n=Dt(e.source);return un.set(n,un.get(n)??fetch(n).then(t=>{if(!t.ok)throw new Error(`Failed to load ${e.source}`);return t.text()}).catch(()=>"")),un.get(n)??""}function ro(e,n){return e.demos.find(t=>t.slug===n)}function co(e){const n=new Map;for(const t of e){const i=n.get(t.tag)??{tag:t.tag,title:t.tagTitle,demos:[]};i.demos.push(t),n.set(t.tag,i)}return[...n.values()]}const De="https://adaengine.org",Le="Ada",oe=`${De}/images/social/ada-preview-v2.png`;function lo(e,n){return{...e,title:a(e.title,n),description:a(e.description,n),path:pe(e.path,n)}}const uo={learn:{title:"Learn Ada - Swift Game Engine Tutorials and Examples",description:"Learn Ada with Swift game development guides, ECS fundamentals, rendering notes, physics examples, and links to source code.",path:"/learn",image:oe,type:"website"},community:{title:"Ada Community - Swift Game Development Contributors",description:"Join the Ada community, follow development, discuss Swift game engine ideas, and contribute to the open-source project.",path:"/community",image:oe,type:"website"},donate:{title:"Support Ada - Open-Source Swift Game Engine",description:"Support Ada development through donations, code contributions, examples, bug reports, and documentation improvements.",path:"/donate",image:oe,type:"website"}};function Ze(e){if(/^https?:\/\//.test(e))return e;const n=e.startsWith("/")?e:`/${e}`;return`${De}${n==="/"?"/":n.replace(/\/$/,"")}`}function po(e){return e.name==="home"?{title:"Ada - Open-Source Swift Game Engine",description:"Ada is an open-source game engine for Swift developers, with ECS, 2D and 3D rendering, physics, UI, editor tooling, and WebAssembly demos.",path:"/",image:oe,type:"website"}:e.name==="download"?{title:"Download Ada — Mac, Windows, Linux and iOS",description:"Download Ada for your platform. Find desktop releases, source code and the iOS app on the App Store.",path:"/download",image:oe,type:"website"}:e.name==="studio"?{title:"Ada Studio - Game Creation on Desktop, iPad and Mobile",description:"Meet Ada Studio. Build scenes, write Swift and AdaScript, and work with an AI agent on desktop and iPad. Bring your game ideas to life on mobile.",path:"/studio",image:`${De}/images/studio/desktop.png`,type:"website"}:e.name==="blog"?{title:"Ada News - Swift Game Engine Updates",description:"Read Ada updates, release notes, engineering deep dives, and Swift game development articles from the project team.",path:"/blog",image:oe,type:"website"}:e.name==="demos"?{title:"Ada Demos - Swift WebAssembly Game Examples",description:"Explore Ada WebAssembly demos built from Swift source files, including 2D rendering, UI, physics, and scene examples.",path:"/demos",image:oe,type:"website"}:e.name==="static-page"?uo[e.page]:e.name==="demo"?{title:"Ada Demo - Swift WebAssembly Example",description:"This Ada demo page lists a Swift WebAssembly example when the demo is available.",path:`/demos/${e.slug}`,image:oe,type:"website",robots:"noindex, follow"}:e.name==="article"?{title:"Ada Article",description:"This Ada article page is available when the requested article has been published.",path:`/articles/${e.slug}`,image:oe,type:"article",robots:"noindex, follow"}:{title:"Page Not Found - Ada",description:"This Ada page could not be found. Return to the open-source Swift game engine homepage.",path:e.name==="not-found"?e.path:"/",image:oe,type:"website",robots:"noindex, follow"}}function mo(e,n="en"){return{title:`${e.title} - ${a("Ada News",n)}`,description:e.description,path:pe(`/articles/${e.slug}`,n),image:e.image?Ze(e.image):oe,type:"article"}}function ho(e,n="en"){return{title:`${a(e.title,n)} - ${a("Ada WebAssembly Demo",n)}`,description:`${a(e.description,n)} ${a("View the Swift source and run the WebAssembly build for this Ada demo.",n)}`,path:pe(`/demos/${e.slug}`,n),image:oe,type:"website"}}function go(e){const n=Ze(e.path),t={"@context":"https://schema.org","@type":"WebSite",name:Le,url:De,description:"Ada is an open-source Swift game engine for 2D and 3D games, ECS architecture, rendering, physics, UI, and demos."};return e.path==="/"?[t,{"@context":"https://schema.org","@type":"SoftwareSourceCode",name:Le,codeRepository:"https://github.com/AdaEngine/AdaEngine",programmingLanguage:"Swift",license:"https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE",url:n,description:e.description}]:e.type==="article"?[t,{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,image:e.image,mainEntityOfPage:n,publisher:{"@type":"Organization",name:Le,url:De}}]:[t,{"@context":"https://schema.org","@type":"WebPage",name:e.title,description:e.description,url:n,isPartOf:{"@type":"WebSite",name:Le,url:De}}]}const J=document.querySelector("#app")??fo(),xe="/",ge=wn(window.location.pathname,xe),pn=new URLSearchParams(window.location.search).get("lang"),Rt=pn==="en"||pn==="ru"?pn:null,Be=di(ge,Rt??pi(),navigator.languages??[navigator.language]);ui(Be);document.documentElement.lang=Be;Be!==yn(ge)&&window.location.replace(`${vn(pe(ge,Be),xe)}${window.location.search}${window.location.hash}`);function fo(){throw new Error("Root app container #app was not found")}const bo="Ada",Pt="images/main/tilemap.png",qn=["images/main/tilemap.png","images/main/space_invaders.jpeg","images/main/duck_hunt.png"],Lt="AdaEngine/AdaEngine";a("Editor"),a("A native scene editor and Swift-first workspace for building Ada projects."),a("Open Ada Editor"),a("Client"),a("A focused desktop client for project-oriented AI agent sessions and day-to-day work."),a("Open Sloppy Client");const yo={learn:{title:a("Learn Ada"),lead:a("Master game development in Swift. From your first sprite to advanced Metal rendering techniques."),sections:[{title:a("Documentation"),body:a("Read guides, API notes and examples for the engine core, ECS, renderer, physics and UI systems."),links:[{label:a("Open documentation"),href:"https://docs.adaengine.org/"}]},{title:a("Examples"),body:a("Explore sample projects such as tilemaps, arcade games and Swift-first game prototypes."),links:[{label:a("Browse examples"),href:"https://github.com/AdaEngine/AdaEngine/tree/main/Examples"}]},{title:a("Features"),body:a("Return to the home page feature overview for a quick summary of what Ada can do."),links:[{label:a("View features"),href:`${U("/")}#features`}]}]},community:{title:a("Community"),lead:a("Join Ada discussions, follow development and help the project grow together with other Swift developers."),sections:[{title:a("GitHub Discussions"),body:a("Ask questions, share ideas and discuss engine development directly with the community."),links:[{label:a("Join discussions"),href:"https://github.com/AdaEngine/AdaEngine/discussions"}]},{title:a("Source Code"),body:a("Report issues, contribute fixes and review the current engine implementation on GitHub."),links:[{label:a("Open repository"),href:"https://github.com/AdaEngine/AdaEngine"}]}]},donate:{title:a("Donate"),lead:a("Ada is free and open source forever. Donations help support ongoing development, examples and documentation."),sections:[{title:a("Support the project"),body:a("If Ada is useful to you, consider supporting development through the donation page."),links:[{label:a("Donate on Boosty"),href:"https://boosty.to/adaengine"}]},{title:a("Contribute instead"),body:a("Code contributions, bug reports, examples and documentation improvements are also a great way to help."),links:[{label:a("Contribute on GitHub"),href:"https://github.com/AdaEngine/AdaEngine"}]}]}},zn=[{title:a("Getting Started"),cards:[{title:a("Get Started"),body:a("Install the engine and create your first window in under 5 minutes."),href:"https://docs.adaengine.org/tutorials/adaengine",icon:"book"},{title:"ECS",body:a("Understand the Entity-Component-System architecture that powers Ada."),href:"https://docs.adaengine.org/documentation/adaecs/",icon:"play"},{title:a("2D Physics Tutorial"),body:a("Add rigid bodies, collision shapes, and handle physics callbacks."),href:"https://docs.adaengine.org/documentation/adaphysics/",icon:"layout"}]},{title:a("API Reference & Documentation"),cards:[{title:a("Core Framework"),body:a("Math, Collections, and basic Engine systems."),href:"https://docs.adaengine.org/documentation/adaengine/"},{title:a("Rendering Pipeline"),body:a("Materials, Shaders, Render Graphs, and Metal integration."),href:"https://docs.adaengine.org/documentation/adarender/"},{title:a("Audio System"),body:a("Spatial audio, sound effects, and music streaming."),href:"https://docs.adaengine.org/documentation/adaaudio/"}]}],Nt=[{title:"GitHub",subtitle:a("Contribute to source code"),href:"https://github.com/AdaEngine/AdaEngine",icon:"images/socials/github.svg"},{title:"Discord",subtitle:a("Live chat & support"),href:"https://discord.gg/JkEPE7nwDu",icon:"images/socials/discord.svg"},{title:"Reddit",subtitle:a("r/AdaEngine discussions"),href:"https://www.reddit.com/r/AdaEngine/",icon:"images/socials/reddit.svg"},{title:"Telegram",subtitle:a("Announcements channel"),href:"https://t.me/adaengine",iconClass:"community-link-icon-telegram",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M42.2 8.7 35.8 39c-.5 2.1-1.8 2.6-3.6 1.6l-9.9-7.3-4.8 4.6c-.5.5-1 .9-2 .9l.7-10.1L34.6 12c.8-.7-.2-1.1-1.2-.4L10.6 25.9.8 22.8c-2.1-.7-2.2-2.1.4-3.1L39.5 4.9c1.8-.7 3.4.4 2.7 3.8Z"/></svg>'},{title:"X (Twitter)",subtitle:a("Follow @ada_engine"),href:"https://x.com/ada_engine",iconClass:"community-link-icon-x",iconMarkup:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M28.4 20.6 43.1 4h-3.5L26.9 18.4 16.7 4H5l15.5 21.9L5 43.4h3.5L22 28.1l10.8 15.3h11.7L28.4 20.6Zm-4.8 5.4-1.6-2.2L9.6 6.5H15l10 14 1.6 2.2 13 18.2h-5.4L23.6 26Z"/></svg>'}],wo=[{title:"Boosty",subtitle:a("Monthly Sponsorship"),body:a("Become a backer on Boosty to get early access to updates, exclusive tutorials, and your name in the engine credits."),href:"https://boosty.to/adaengine",action:a("Support on Boosty"),icon:"images/icons/ic_boosty.svg",tone:"boosty"},{title:"DonationAlerts",subtitle:a("One-time Donation"),body:a("Prefer to make a one-time contribution? You can support us via DonationAlerts with various payment methods."),href:"https://www.donationalerts.com/r/adaengine",action:a("Donate via DA"),icon:"images/donation_alerts_logo.svg",tone:"donation-alerts"}],ze=[{title:a("Data Driven"),description:a("Ada build around custom Entity Component System. Simple to use, fast and cache-friendly for your game architecture."),details:a("Ada is built around a custom, data-oriented Entity Component System inspired by modern Swift APIs. Components keep game state small and explicit, while systems operate through typed queries, resources, schedules and macros such as @Component and @System. This makes gameplay code modular, cache-friendly and easier to scale from a tiny prototype to a full scene with input, animation, physics and rendering working together."),code:`@Component
struct Player: Entity { }

struct PlayerSystem: System {
    func update(context: UpdateSceneContext) { }
}`,gif:"images/features/data-driven.gif"},{title:a("2D Renderer"),description:a("Supports real-time 2D rendering for your games and apps. Write custom shaders, materials and render pipelines."),details:a("Ada ships with a high-level 2D rendering stack for sprites, text, tilemaps, cameras and custom materials. The demos cover sprite animation, transparency, lighting, text rendering, WGSL experiments and stress scenes, while the renderer still leaves room for lower-level control when you need custom shaders or pipeline work. It is designed for Swift-first game code where drawing a scene should feel direct, but not boxed in."),image:"images/icons/ic_duck.png",gif:"images/features/2d-renderer.gif"},{title:a("2D Physics"),description:a("Ada supports Box2D v3 physics with parallel calculations, lightweight memory usage and fast simulation."),details:a("The Physics2D plugin integrates Box2D with Ada entities through components such as PhysicsBody2DComponent and Collision2DComponent. Simulation runs on the fixed-update schedule, then syncs transforms back into the scene so gameplay systems can react through the same ECS flow as the rest of the engine. It includes collision events, debug drawing support and world resources for direct access when a game needs deeper physics control."),image:"images/icons/ic_box2d.svg",gif:"images/features/2d-physics.gif"},{title:a("Render Graphs"),description:a("Construct your own render pipeline using powerful render graphs."),details:a("Rendering is organized around RenderGraph resources, nodes, slots, subgraphs and an executor that runs the graph each frame. Core 2D and 3D pipelines are assembled as graphs, and cameras can point at specific render subgraphs for flexible composition. Diagnostics can snapshot nodes, edges, subgraphs and frame records, which makes custom pipelines easier to reason about when you add post-processing, offscreen passes or specialized rendering stages."),image:"images/icons/ic_render_graph.svg",gif:"images/features/render-graphs.gif"},{title:a("Custom UI Engine"),description:a("Create your own UI using a SwiftUI-like approach that fits naturally into Ada scenes."),details:a("AdaUI brings a SwiftUI-like declarative layer into Ada with views, result builders, environment values, layout containers, gestures, animation, text fields, scroll views and navigation primitives. UI can live naturally beside game scenes, and the engine includes tooling such as a 3D AdaUI debug view for inspecting live UI trees. The goal is to make editor panels, HUDs and in-game interfaces feel native to the same Swift codebase as your gameplay."),code:`struct MainView: View {
    @Environment(\\.scene) var scene

    var body: some View {
        Text("Hello, World!")
    }
}`,gif:"images/features/custom-ui.gif"},{title:a("Free and Open Source"),description:a("Ada is 100% free for you. Licensed by MIT. Learn, modify or use without royalties or runtime fees."),details:a("Ada is MIT licensed and developed in the open, with source, tutorials, generated API documentation, demos and build guides available from the repository. You can study the engine internals, modify them for your project, ship without royalties or runtime fees, and contribute fixes, examples or documentation back to the community. The project is still evolving, so the roadmap is visible where the code actually lives."),image:"images/icons/ic_opensource.svg",gif:"images/features/open-source.gif"},{title:"AdaScript",description:a("Write gameplay scripts with AdaScript, powered by the Gravity language runtime and integrated with Ada ECS."),details:a("AdaScript brings the Gravity scripting runtime into Ada for fast gameplay iteration. Scripts declare their component queries and use capability-scoped access to read or update reflected ECS fields, so scripted systems participate in the same scheduling and access rules as native Swift systems. Keep performance-critical code in Swift and move tuning, behaviours and gameplay logic into reloadable scripts."),gif:"images/features/adascript.gif"},{title:a("3D Rendering"),description:a("Build 3D scenes with cameras, materials, lighting, skyboxes and extensible render pipelines."),details:a("Ada’s 3D stack is built around the same render-graph architecture as its core renderer. Compose camera views, materials, meshes, lights, environment settings and skyboxes into a Swift-first scene, then extend the pipeline with your own passes and subgraphs when a project needs custom post-processing or rendering techniques."),gif:"images/features/3d-rendering.gif"},{title:a("3D Physics"),description:a("Simulate rigid bodies, collisions and constraints in 3D with the integrated Box3D physics engine."),details:a("Ada includes a Box3D-backed 3D physics path for rigid body simulation, collision queries and joint constraints. It is designed to work alongside Ada entities and transforms, with a dedicated example target for validating 3D physics scenes. Box3D brings a C17 rigid-body simulation core while Ada keeps the scene-facing API in Swift."),gif:"images/features/3d-physics.gif"}];function $(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function vo(e){return/^https?:\/\//.test(e)}function Ao(e){return e.details}function Tn(e){return new Intl.DateTimeFormat(Z()==="ru"?"ru-RU":"en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(e))}function U(e){if(/^store(?:-test)?\./.test(window.location.hostname)&&/^\/cloud(\/|$)/.test(e))return hn(new URL(e,window.location.hostname.startsWith("store-test.")?"https://cloud-test.adaengine.org":"https://cloud.adaengine.org").href);const n=/^\/(cloud|games|legal|store)(?:\/|[?#]|$)/.test(ye(e)),t=/^(store|cloud)(?:-test)?\./.test(window.location.hostname)?"https://adaengine.org":void 0;if(e=pe(e,Z()),t&&!n)return hn(new URL(e,t).href);const i=vn(e,xe);if(Rt){const o=new URL(i,window.location.origin);return o.searchParams.set("lang",Z()),`${o.pathname}${o.search}${o.hash}`}return i}function hn(e){const n=new URL(e);return n.pathname=pe(n.pathname,Z()),Z()==="en"&&n.searchParams.set("lang","en"),n.href}function X(e){const n=xe.endsWith("/")?xe:`${xe}/`,t=e.replace(/^\/+/,"");return`${n}${t}`}function K(e,n,t){let i=document.head.querySelector(`meta[${e}="${n}"]`);i||(i=document.createElement("meta"),i.setAttribute(e,n),document.head.appendChild(i)),i.content=t}function So(e,n){var t;(t=document.head.querySelector(`meta[${e}="${n}"]`))==null||t.remove()}function In(e){e=lo(e,Z());const n=Ze(e.path);let t=document.head.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),document.title=e.title,t.href=n;for(const i of document.head.querySelectorAll("link[data-language-alternate]"))i.remove();for(const i of[...fn,"x-default"]){const o=document.createElement("link");o.rel="alternate",o.hreflang=i,o.href=Ze(pe(e.path,i==="x-default"?"en":i)),o.dataset.languageAlternate="true",document.head.appendChild(o)}K("property","og:locale",Z()==="ru"?"ru_RU":"en_US"),K("name","description",e.description),K("property","og:site_name",Le),K("property","og:title",e.title),K("property","og:description",e.description),K("property","og:type",e.type),K("property","og:url",n),K("property","og:image",e.image),K("property","og:image:alt",e.title),K("name","twitter:card","summary_large_image"),K("name","twitter:title",e.title),K("name","twitter:description",e.description),K("name","twitter:image",e.image),K("name","twitter:image:alt",e.title),e.robots?K("name","robots",e.robots):So("name","robots");for(const i of document.head.querySelectorAll("script[data-seo-structured-data]"))i.remove();for(const i of go(e)){const o=document.createElement("script");o.type="application/ld+json",o.dataset.seoStructuredData="true",o.textContent=JSON.stringify(i),document.head.appendChild(o)}}function Eo(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(1)}m`}async function ko(){const e=document.querySelector("[data-github-stars]"),n=document.querySelector("[data-github-stars-value]");if(n)try{const t=await fetch(`https://api.github.com/repos/${Lt}`,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)return;const i=await t.json();if(typeof i.stargazers_count!="number")return;const o=Eo(i.stargazers_count);n.textContent=o,e==null||e.setAttribute("aria-label",`${o} ${a("GitHub stars")}`)}catch{}}function ne(){const e=Xn(window.location.pathname,"/"),n=/^\/store(\/|$)/.test(ye(ge))||/^store(?:-test)?\./.test(window.location.hostname)&&ye(ge)==="/",t=/^\/(cloud|games|legal)(\/|$)/.test(ye(ge))||/^cloud(?:-test)?\./.test(window.location.hostname)&&ye(ge)==="/",i=n?"store":t?"cloud":e.name==="static-page"?e.page:e.name==="demo"?"demos":e.name,o=[{label:a("Home"),href:U("/"),active:i==="home"},{label:a("Studio"),href:U("/studio"),active:i==="studio"},...ve.length?[{label:a("News"),href:U("/blog"),active:i==="blog"}]:[],{label:a("Demos"),href:U("/demos"),active:i==="demos"},{label:a("Learn"),href:U("/learn"),active:i==="learn"},{label:a("Socials"),href:U("/community"),active:i==="community",secondary:!0},{label:a("Store"),href:n?U("/store"):`https://${/^(cloud-test|store-test)\./.test(window.location.hostname)?"store-test":"store"}.adaengine.org${Z()==="ru"?"/ru/store":"/store?lang=en"}`,active:n,secondary:!0},{label:a("Cloud"),href:hn(new URL("/cloud",/^(cloud-test|store-test)\./.test(window.location.hostname)?"https://cloud-test.adaengine.org":"https://cloud.adaengine.org").href),active:t,secondary:!0},{label:a("Donate"),href:U("/donate"),active:i==="donate",secondary:!0}];return`
    <header class="header${i==="learn"?" header-learn":""}">
      <section class="container content-restriction header-container">
        <a class="header-logo" href="${U("/")}" aria-label="${a("Ada home")}">
          <picture class="header-logo-picture">
            <source srcset="${X("images/ae_logo~dark.svg")}" media="(prefers-color-scheme: dark)" />
            <img src="${X("images/ae_logo.svg")}" alt="Ada" />
          </picture>
          <h2>${bo}</h2>
        </a>
        <button class="burger-container" type="button" aria-label="${a("Open menu")}" aria-expanded="false">
          <span id="burger" aria-hidden="true"><span class="bar topBar"></span><span class="bar bottomBar"></span></span>
        </button>
        <nav aria-label="${a("Main navigation")}">
          <ul class="navigation">
            ${o.map(s=>`<li class="navigation-item${"secondary"in s&&s.secondary?" navigation-item-secondary":""}"><a class="navigation-item-link${s.active?" is-active":""}"${s.active?' aria-current="page"':""} href="${s.href}">${s.label}</a></li>`).join("")}
            <li class="navigation-item download-button"><a class="navigation-item-link" href="${U("/download")}">${a("Download")} <span class="download-version" data-download-version>v${ce.version}</span></a></li>
          </ul>
        </nav>
      </section>
    </header>
  `}function xo(){return`
    <section class="home-introduction" aria-labelledby="home-title">
      <div class="home-section-rail"><span>${a("01 / Introduction")}</span><span>${a("Open source. Endless possibilities.")}</span></div>
      <div class="hero-section">
      <div class="hero-copy">
        <p class="hero-eyebrow"><span class="home-status-dot" aria-hidden="true"></span> ${a("A game engine for Swift developers")}</p>
        <h1 class="ae-header-title" id="home-title">${a("Your ideas.")}<br />${a("Built in")} <span>Swift.</span></h1>
        <p class="hero-subtitle">${a("An open-source engine for the worlds you want to create. Build 2D and 3D games with modern Swift and tools that feel right at home.")}</p>
        <div class="hero-actions">
          <a class="header-buttons" href="${U("/download")}">${a("Download")} <span class="download-version" data-download-version>v${ce.version}</span></a>
          <a class="header-buttons-github" href="https://github.com/${Lt}" aria-label="${a("Ada on GitHub")}">
            <span class="github-button-label">
              <svg class="github-button-icon" viewBox="0 0 438.549 438.549" aria-hidden="true" focusable="false"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"/></svg>
              GitHub
            </span>
            <span class="github-stars" data-github-stars aria-label="${a("Loading GitHub stars")}">
              <svg class="github-star-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 2.6 2.92 5.92 6.53.95-4.72 4.6 1.11 6.5L12 17.5l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.6z"/></svg>
              <span data-github-stars-value>...</span>
            </span>
          </a>
          <a class="home-docs-action" href="https://docs.adaengine.org/">${a("Read the docs")} <span aria-hidden="true">↗</span></a>
        </div>
        <div class="home-platforms" aria-label="${a("Available platforms")}"><span>macOS</span><span>iOS</span><span>Windows</span><span>Linux</span><span>Web</span></div>
      </div>
      <figure class="home-editor-preview">
        <div class="home-preview-bar"><span>Ada Editor</span><span>${a("Built to make things")} <span aria-hidden="true">↗</span></span></div>
        <div class="home-editor-image"><img src="${X("images/studio/desktop.png")}" alt="${a("Ada Editor showing a Swift project and source code")}" fetchpriority="high" /></div>
        <figcaption><span>${a("Native tools. Your creative space.")}</span><span>Swift / 2D / 3D</span></figcaption>
      </figure>
      </div>
    </section>
  `}function To(e=[]){return e.length?`<ul class="tags">${e.map(n=>`<li>${a(n)}</li>`).join("")}</ul>`:""}function Io(){return ve.length?`
    <section id="latest-news" class="latest-news home-section" aria-labelledby="home-news-title">
      <div class="home-section-rail"><span>${a("03 / From the team")}</span><a href="${U("/blog")}">${a("All news")} <span aria-hidden="true">↗</span></a></div>
      <div class="home-section-intro"><h2 id="home-news-title">${a("The latest from Ada.")}</h2><p>${a("Updates, ideas and things we’re building.")}</p></div>
      <div class="home-articles-grid">
        ${ve.slice(0,4).map(e=>`
          <article class="home-article-preview">
            <a href="${U(`/articles/${e.slug}`)}">
              <div class="home-news-image"><img src="${X(e.image??Pt)}" alt="${$(e.title)}" loading="lazy" decoding="async" /></div>
              <div class="home-news-copy">
                <div class="home-news-meta"><span>${Tn(e.date)}</span><span>${$(e.author.name)}</span></div>
                <h3>${$(e.title)} <span aria-hidden="true">↗</span></h3>
                <p>${$(e.description)}</p>
                ${To(e.tags)}
              </div>
            </a>
          </article>
        `).join("")}
      </div>
    </section>
  `:""}function Ot(e=[]){const n=e[0]??a("News");return`<span class="blog-entry-tag blog-entry-tag-${["release","tutorial","engineering","markdown","frontmatter","vite"].find(i=>n.toLowerCase().includes(i))??"default"}">${$(a(n))}</span>`}function Co(e,n){return e.image??qn[n%qn.length]??Pt}function $o(){J.innerHTML=`
    ${ne()}
    <main class="page-shell blog-page-shell">
      <section class="container content-restriction blog-page">
        <header class="blog-page-hero">
          <p class="page-eyebrow">${a("01 / Engine news")}</p>
          <h1>${a("Engine News")}</h1>
          <p>${a("Updates, release notes, and engineering deep dives from the Ada team.")}</p>
        </header>
        ${ve.length?`<div class="blog-timeline">
                ${ve.map((e,n)=>`
                      <article class="blog-entry">
                        <aside class="blog-entry-meta" aria-label="${a("Article metadata")}">
                          <time datetime="${e.date}">${Tn(e.date)}</time>
                          ${Ot(e.tags)}
                        </aside>
                        <a class="blog-entry-card" href="${U(`/articles/${e.slug}`)}">
                          <img class="blog-entry-cover" src="${X(Co(e,n))}" alt="" loading="lazy" />
                          <span class="blog-entry-cover-overlay" aria-hidden="true"></span>
                          <span class="blog-entry-content">
                            <h2>${$(e.title)}</h2>
                            <p>${$(e.description)}</p>
                            <span class="blog-entry-action">${a("Read full article →")}</span>
                          </span>
                        </a>
                      </article>
                    `).join("")}
              </div>`:`<div class="blog-empty">
                <h2>${a("No articles yet")}</h2>
                <p>${a("Fresh Ada updates will appear here soon.")}</p>
              </div>`}
      </section>
    </main>
    ${te()}
  `}function _o(e){const n=co(e.demos),t=n.map(i=>`
        <a class="article-toc-link demo-category-link" href="#demo-group-${$(i.tag)}" data-demo-category-link="demo-group-${$(i.tag)}">
          <span>${$(i.title)}</span>
          <small>${i.demos.length}</small>
        </a>
      `).join("");J.innerHTML=`
    ${ne()}
    <main class="page-shell demos-page-shell">
      <section class="container content-restriction demos-page">
        <header class="demos-hero">
          <p class="eyebrow">${a("Live WebAssembly examples")}</p>
          <h1>${a("Ada Demos")}</h1>
          <p>${a("Explore browser builds generated from the Swift files in the Ada repository. Each demo page includes the embedded build and the source that produced it.")}</p>
        </header>
        ${n.length?`<div class="demos-browse-layout">
                <aside class="demo-category-nav" aria-label="${a("Demo categories")}">
                  <div class="article-toc-panel demo-category-panel">
                    <p class="article-toc-title">${a("Categories")}</p>
                    <nav class="article-toc-list demo-category-list">${t}</nav>
                  </div>
                </aside>
                <div class="demo-groups">
                  ${n.map(i=>`
                        <section class="demo-group" aria-labelledby="demo-group-${$(i.tag)}">
                          <div class="demo-group-heading">
                            <h2 id="demo-group-${$(i.tag)}">${$(i.title)}</h2>
                            <span>${i.demos.length} ${Z()==="ru"?"демо":i.demos.length===1?"demo":"demos"}</span>
                          </div>
                          <div class="demo-card-grid">
                            ${i.demos.map(Do).join("")}
                          </div>
                        </section>
                      `).join("")}
                </div>
              </div>`:`<div class="demo-empty">
                <h2>${a("No demos published yet")}</h2>
                <p>${a("The website will show demos after the Ada export workflow publishes the first manifest.")}</p>
              </div>`}
      </section>
    </main>
    ${te()}
  `}function Do(e){return`
    <a class="demo-card" href="${U(`/demos/${e.slug}`)}">
      <span class="demo-card-tag">${$(e.tagTitle)}</span>
      <h3>${$(e.title)}</h3>
      <p>${$(e.description)}</p>
      <span class="demo-card-meta">${$(e.sourcePath)}</span>
      ${e.hasBuild?`<span class="demo-card-action">${a("Open demo")}</span>`:`<span class="demo-card-action demo-card-action-muted">${a("Source only")}</span>`}
    </a>
  `}async function Mo(e){const n=await Mt(),t=ro(n,e);if(!t){Je(a("Demo not found"),a("Check the address or return to the demos page."));return}In(ho(t,Z()));const i=await oo(t),o=n.commit??"main",c=`https://github.com/${n.repository}/blob/${o}/${t.sourcePath}`;J.innerHTML=`
    ${ne()}
    <main class="page-shell demo-detail-shell">
      <article class="container content-restriction demo-detail-page">
        <header class="demo-detail-hero">
          <a class="article-back-link" href="${U("/demos")}">${a("Back to Demos")}</a>
          <span class="demo-card-tag">${$(t.tagTitle)}</span>
          <h1>${$(t.title)}</h1>
          <p>${$(t.description)}</p>
          <a class="demo-source-link" href="${c}" target="_blank" rel="noreferrer">${$(t.sourcePath)}</a>
        </header>
        ${t.hasBuild?`<section class="demo-player" aria-label="${$(t.title)} — ${a("Embedded demo")}">
                <button class="demo-player-fullscreen" type="button" aria-label="${a("Open demo fullscreen")}" title="${a("Open fullscreen")}" data-demo-fullscreen>
                  <svg class="demo-player-fullscreen-enter-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="demo-player-fullscreen-exit-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <iframe title="${$(t.title)}" src="${X(t.embed)}" allow="fullscreen; gamepad; keyboard-map; clipboard-read; clipboard-write; webgpu" allowfullscreen webkitallowfullscreen></iframe>
              </section>`:`<section class="demo-player demo-player-empty">
                <h2>${a("Build artifact is not available")}</h2>
                <p>${a("This demo is listed in the manifest, but the WebAssembly export was not published.")}</p>
              </section>`}
        <section class="demo-source-section" aria-labelledby="demo-source-title">
          <div class="demo-source-heading">
            <h2 id="demo-source-title">${a("Source")}</h2>
            <a class="demo-source-github-link" href="${c}" target="_blank" rel="noreferrer">
              <svg class="demo-source-github-icon" viewBox="0 0 438.549 438.549" aria-hidden="true" focusable="false"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"/></svg>
              <span>${a("Open on GitHub")}</span>
              <svg class="demo-source-external-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
          <figure class="article-code-block demo-source-code">
            <figcaption>
              <span>${$(t.sourcePath)}</span>
              <span>Swift</span>
            </figcaption>
            <pre class="code-with-line-numbers"><code class="${It("swift")}">${Os(i,"swift")}</code></pre>
          </figure>
        </section>
      </article>
    </main>
    ${te()}
  `}function Ro(){const e=[...ze.slice(-3),...ze.slice(0,-3)];return`
    <section id="features" class="features-container home-section" aria-labelledby="home-features-title">
      <div class="home-section-rail"><span>${a("02 / Capabilities")}</span><span>${a("A complete creative toolkit")}</span></div>
      <div class="home-section-intro"><h2 id="home-features-title">${a("Small details.")}<br />${a("Big possibilities.")}</h2><p>${a("Everything you need to bring a world to life, built around the way you write Swift.")}</p></div>
      <div class="features-grid">
        ${e.map((n,t)=>`
              <button class="engine-info-item-container feature-card feature-card-${t+1}" type="button" data-feature-index="${ze.indexOf(n)}" data-feature-position="${t+1}" aria-haspopup="dialog">
                ${Po(n)}
                <div class="engine-info-item-text">
                  <span class="feature-number">${String(t+1).padStart(2,"0")} / ${a("Engine")}</span>
                  <h3>${n.title}</h3>
                  <p>${n.description}</p>
                </div>
                <span class="feature-card-action">${a("Explore feature")} <span aria-hidden="true">↗</span></span>
              </button>
            `).join("")}
      </div>
    </section>
  `}function Po(e){const n=e.gif?X(e.gif):"";return`
    <div class="engine-info-item-content feature-media-slot" data-feature-preview>
      ${n?`<img class="feature-media-gif" src="${n}" alt="" loading="lazy" decoding="async" />`:""}
      <span class="feature-media-loader" aria-label="${a("Loading animated feature preview")}">
        <span class="feature-media-spinner" aria-hidden="true"></span>
        <span>${a("Loading preview")}</span>
      </span>
    </div>
  `}function Lo(){return`
    <div class="feature-modal" role="dialog" aria-modal="true" aria-labelledby="feature-modal-title" hidden>
      <div class="feature-modal-backdrop" data-modal-close></div>
      <section class="feature-modal-panel">
        <button class="feature-modal-close" type="button" aria-label="${a("Close feature details")}" title="${a("Close")}" data-modal-close>
          <span class="feature-modal-close-label">${a("Close")}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="feature-modal-layout">
          <div class="feature-modal-visual" id="feature-modal-visual"></div>
          <div class="feature-modal-copy">
            <p class="eyebrow" id="feature-modal-kicker">${a("Feature")}</p>
            <h2 id="feature-modal-title"></h2>
            <p id="feature-modal-description"></p>
          </div>
        </div>
      </section>
    </div>
  `}function No(){return`
    <nav class="footer-social-links" aria-label="${a("Social links")}">
      <a class="footer-social-link" href="https://github.com/AdaEngine/AdaEngine" target="_blank" rel="noreferrer" aria-label="${a("Ada on GitHub")}"><svg viewBox="0 0 438.549 438.549" aria-hidden="true" focusable="false"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"/></svg></a>
      <a class="footer-social-link" href="https://discord.gg/JkEPE7nwDu" target="_blank" rel="noreferrer" aria-label="${a("Ada on Discord")}"><svg viewBox="0 0 127.14 96.36" aria-hidden="true" focusable="false"><path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83 72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"/></svg></a>
      <a class="footer-social-link" href="https://x.com/ada_engine" target="_blank" rel="noreferrer" aria-label="${a("Ada on Twitter")}"><svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a>
      <a class="footer-social-link" href="https://t.me/adaengine" target="_blank" rel="noreferrer" aria-label="${a("Ada on Telegram")}"><svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M42.2 8.7 35.8 39c-.5 2.1-1.8 2.6-3.6 1.6l-9.9-7.3-4.8 4.6c-.5.5-1 .9-2 .9l.7-10.1L34.6 12c.8-.7-.2-1.1-1.2-.4L10.6 25.9.8 22.8c-2.1-.7-2.2-2.1.4-3.1L39.5 4.9c1.8-.7 3.4.4 2.7 3.8Z"/></svg></a>
    </nav>
  `}function te(){return`
    <footer class="footer">
      <div class="footer-dot-field" aria-hidden="true"></div>
      <div class="footer-container">
        <div class="footer-columns">
          <section>
            <h3>Ada</h3>
            <a href="${U("/studio")}">${a("Studio")}</a>
            <a href="${U("/download")}">${a("Download")}</a>
            <a href="https://github.com/AdaEngine/AdaEngine">${a("Source code")}<span class="footer-external-mark" aria-hidden="true">↗</span></a>
          </section>
          <section>
            <h3>${a("Project")}</h3>
            ${ve.length?`<a href="${U("/blog")}">${a("Blog")}</a>`:""}
            <a href="${U("/learn")}">${a("Learn")}</a>
            <a href="${U("/community")}">${a("Community")}</a>
          </section>
          <section>
            <h3>${a("Foundation")}</h3>
            <a href="${U("/donate")}">${a("Donate")}</a>
            <a href="https://github.com/AdaEngine/AdaEngine/blob/main/LICENSE">${a("License")}<span class="footer-external-mark" aria-hidden="true">↗</span></a>
          </section>
        </div>
        <div class="footer-bottom">
          <p>${a("© 2021-2026 Vladislav Prusakov and contributors. All rights reserved.")}</p>
          ${No()}
          ${gi()}
        </div>
        <div class="footer-blueprint-mark" aria-hidden="true">Ada</div>
      </div>
    </footer>
  `}function Oo(e){return e?`
    <span class="learn-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        ${{book:'<path d="M7 5.5h8.5a2.5 2.5 0 0 1 2.5 2.5v11H9.5A2.5 2.5 0 0 0 7 21.5V5.5Z"/><path d="M7 5.5A2.5 2.5 0 0 1 9.5 3H18v16"/>',play:'<circle cx="12" cy="12" r="9"/><path d="m10.5 8.5 5 3.5-5 3.5v-7Z"/>',layout:'<rect x="4" y="5" width="16" height="14" rx="1.5"/><path d="M9 5v14"/><path d="M4 10h16"/>'}[e]}
      </svg>
    </span>
  `:""}function Bo(){const e=yo.learn;J.innerHTML=`
    ${ne()}
    <main class="page-shell learn-page-shell">
      <section class="container content-restriction learn-page">
        <header class="learn-hero">
          <p class="page-eyebrow">${a("01 / Learn Ada")}</p>
          <h1>${e.title}</h1>
          <p>${e.lead}</p>
        </header>
        ${zn.map(n=>{const t=`learn-section-${zn.indexOf(n)}`;return`
              <section class="learn-section" aria-labelledby="${t}">
                <h2 id="${t}">${n.title}</h2>
                <div class="learn-grid">
                  ${n.cards.map(i=>`
                        <a class="learn-card" href="${i.href}">
                          ${Oo(i.icon)}
                          <h3>${i.title}</h3>
                          <p>${i.body}</p>
                        </a>
                      `).join("")}
                </div>
              </section>
            `}).join("")}
      </section>
    </main>
    ${te()}
  `}function Uo(e){if(e==="learn"){Bo();return}if(e==="community"){Fo();return}if(e==="donate"){Go();return}}function Go(){J.innerHTML=`
    ${ne()}
    <main class="page-shell donation-page-shell">
      <section class="container content-restriction donation-page">
        <header class="donation-hero">
          <p class="page-eyebrow">${a("01 / Support the project")}</p>
          <h1>${a("Support Ada")}</h1>
          <p>${a("Ada is an independent open-source project. Your support helps us dedicate more time to development and tooling.")}</p>
        </header>
        <div class="donation-options" aria-label="${a("Donation options")}">
          ${wo.map(e=>`
                <article class="donation-card donation-card-${e.tone}">
                  <span class="donation-card-logo" aria-hidden="true">
                    <img src="${X(e.icon)}" alt="" loading="lazy" />
                  </span>
                  <div class="donation-card-brand">${e.title}</div>
                  <h2>${e.subtitle}</h2>
                  <p>${e.body}</p>
                  <a class="donation-card-action" href="${e.href}" target="_blank" rel="noreferrer">${e.action}</a>
                </article>
              `).join("")}
        </div>
        <section class="donation-contribute" aria-labelledby="donation-contribute-title">
          <h2 id="donation-contribute-title">${a("Code Contributions")}</h2>
          <p>
            ${a("Can't support financially? Code contributions are equally valuable! Check out our")}
            <a href="https://github.com/AdaEngine/AdaEngine/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22" target="_blank" rel="noreferrer">${a("good first issues")}</a>
            ${a("on GitHub to get started.")}
          </p>
        </section>
      </section>
    </main>
    ${te()}
  `}function Fo(){J.innerHTML=`
    ${ne()}
    <main class="page-shell community-page-shell">
      <section class="container content-restriction community-page">
        <header class="community-hero">
          <p class="page-eyebrow">${a("01 / Made together")}</p>
          <h1>${a("Join the Community")}</h1>
          <p>${a("Connect with other developers, share your projects, and contribute to the engine.")}</p>
        </header>
        <div class="community-link-grid" aria-label="${a("Ada community links")}">
          ${Nt.map(e=>`
                <a class="community-link-card" href="${e.href}" target="_blank" rel="noreferrer">
                  <span class="community-link-icon ${e.iconClass??""}">
                    ${e.iconMarkup??`<img src="${X(e.icon??"")}" alt="" width="42" height="42" loading="lazy" />`}
                  </span>
                  <span class="community-link-copy">
                    <strong>${e.title}</strong>
                    <span>${e.subtitle}</span>
                  </span>
                </a>
              `).join("")}
        </div>
      </section>
    </main>
    ${te()}
  `}function jo(){const e=Nt.find(n=>n.title==="Discord");J.innerHTML=`
    <div class="home-page">
      ${ne()}
      <main class="page-shell home-main">
        <div class="container content-restriction">
          ${xo()}
          
          ${Ro()}
          ${Io()}
          <section class="home-community" aria-labelledby="home-community-title">
            <div class="home-section-rail"><span>${a("04 / Made together")}</span><span>${a("Independent. Open. Community-built.")}</span></div>
            <div class="home-community-content"><div><h2 id="home-community-title">${a("Make something")}<br />${a("of your own.")}</h2><p>${a("Share your work, ask a question, or help shape what comes next.")}</p></div><a class="home-community-action" href="${e.href}">${a("Join the community")} <span aria-hidden="true">↗</span></a></div>
          </section>
        </div>
      </main>
      ${te()}
    </div>
    ${Lo()}
  `}function Ho(e){const n=so(e);if(!n){Je(a("Article not found"),a("Check the address or return to the blog."));return}In(mo(n,Z())),J.innerHTML=`
    ${ne()}
    <main class="page-shell article-page-shell">
      <div class="container article-reading-layout">
        <article class="safe-area-insets article-page">
          <header class="article-hero">
            <a class="article-back-link" href="${U("/blog")}">${a("Back to News")}</a>
            ${Ot(n.tags)}
            <h1 lang="en">${n.title}</h1>
            <div class="article_info">
              ${qo(n.author)}
              <span aria-hidden="true">•</span>
              <time datetime="${n.date}">${Tn(n.date)}</time>
              <span aria-hidden="true">•</span>
              <span>${n.readingTime} ${Z()==="ru"?"мин чтения":"min read"}</span>
            </div>
            <p class="article-item-description">${n.description}</p>
          </header>
          ${Z()==="ru"?`<p class="article-language-note">${a("This article is currently available in English.")}</p>`:""}
          <div class="article-content" lang="en">${n.html}</div>
        </article>
        ${Vo(n.toc)}
      </div>
    </main>
    ${Wo()}
    ${te()}
  `}function Wo(){return`
    <div class="article-image-lightbox" role="dialog" aria-modal="true" aria-label="${a("Fullscreen article image")}" hidden data-article-lightbox>
      <button class="article-image-lightbox-backdrop" type="button" aria-label="${a("Close fullscreen image")}" data-article-lightbox-close></button>
      <figure class="article-image-lightbox-frame">
        <button class="article-image-lightbox-close demo-player-fullscreen" type="button" aria-label="${a("Close fullscreen image")}" title="${a("Close")}" data-article-lightbox-close>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/>
          </svg>
        </button>
        <img src="" alt="" data-article-lightbox-preview />
        <figcaption data-article-lightbox-caption hidden></figcaption>
      </figure>
    </div>
  `}function qo(e){const n=`${Z()==="ru"?"Автор:":"By"} ${e.name}`,i=`
    ${e.avatar?`<img class="article-author-avatar" src="${$(zo(e.avatar))}" alt="${$(`${a("Avatar")}: ${e.name}`)}" loading="lazy" />`:""}
    <span class="article-author-label">${$(n)}</span>
  `;return!e.url||!vo(e.url)?`<span class="article-author">${i}</span>`:`
    <a class="article-author article-author-link" href="${$(e.url)}" target="_blank" rel="author noreferrer">
      ${i}
      <svg class="article-author-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M5 3.5h7.5V11M12.25 3.75 4 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  `}function zo(e){return/^(https?:|data:|blob:|\/)/.test(e)||e.startsWith("images/")?X(e):X(`images/${e}`)}function Vn(e,n){return e.map(t=>`
        <a class="article-toc-link article-toc-link-level-${t.level}" href="#${t.id}" data-article-toc-link="${t.id}" data-toc-context="${n}">
          <span>${$(t.title)}</span>
        </a>
      `).join("")}function Vo(e){var o;if(!e.length)return"";const n=Vn(e,"desktop"),t=Vn(e,"mobile"),i=((o=e[0])==null?void 0:o.title)??a("Start");return`
    <aside class="article-toc" aria-label="${a("On this page")}">
      <div class="article-toc-panel">
        <p class="article-toc-title">${a("On this page")}</p>
        <div class="article-toc-progress" aria-hidden="true">
          <span data-article-progress-fill></span>
        </div>
        <p class="article-toc-progress-label"><span data-article-progress-label>0%</span> ${a("read")}</p>
        <nav class="article-toc-list">${n}</nav>
      </div>
    </aside>
    <div class="article-mobile-reader-nav" data-mobile-reader-nav>
      <button class="article-mobile-reader-button" type="button" data-mobile-toc-toggle aria-expanded="false" aria-controls="article-mobile-toc-sheet" aria-label="${a("Open article sections")}">
        <span class="article-mobile-progress" aria-hidden="true">
          <span data-article-progress-fill></span>
        </span>
        <span class="article-mobile-reader-copy">
          <span data-article-progress-label>0%</span>
          <strong data-current-section>${$(i)}</strong>
        </span>
        <span class="article-mobile-reader-action" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div class="article-mobile-toc-sheet" id="article-mobile-toc-sheet" data-mobile-toc-sheet hidden>
        <div class="article-mobile-toc-header">
          <span>${a("On this page")}</span>
          <span><span data-article-progress-label>0%</span> ${a("read")}</span>
        </div>
        <nav class="article-mobile-toc-list">${t}</nav>
      </div>
    </div>
  `}function Je(e=a("Page not found"),n=a("This route does not exist yet.")){J.innerHTML=`
    ${ne()}
    <main class="page-shell">
      <section class="container content-restriction safe-area-insets status-page">
        <p class="page-eyebrow">${a("404 / Page unavailable")}</p>
        <h1>${e}</h1>
        <p>${n}</p>
        <a class="header-buttons" href="${U("/")}">${a("Home")}</a>
      </section>
    </main>
    ${te()}
  `}function Ko(){const e=document.querySelector(".article-content"),n=document.querySelector("[data-mobile-reader-nav]"),t=document.querySelector("[data-mobile-toc-toggle]"),i=document.querySelector("[data-mobile-toc-sheet]"),o=Array.from(document.querySelectorAll(".article-content h2[id], .article-content h3[id]")),c=Array.from(document.querySelectorAll("[data-article-toc-link]")),s=Array.from(document.querySelectorAll("[data-article-progress-fill]")),r=Array.from(document.querySelectorAll("[data-article-progress-label]")),l=Array.from(document.querySelectorAll("[data-current-section]"));if(!e||!o.length||!c.length)return;let d,u;const m=A=>{if(!(!t||!i||!n)){if(window.clearTimeout(d),t.setAttribute("aria-expanded",String(A)),A){i.hidden=!1,n.classList.remove("is-closing"),n.classList.add("is-open");return}n.classList.remove("is-open"),n.classList.add("is-closing"),d=window.setTimeout(()=>{i.hidden=!0,n.classList.remove("is-closing")},520)}},y=A=>{const E=document.getElementById(A);E&&(E.scrollIntoView({behavior:"smooth",block:"start"}),m(!1))},w=A=>{const E=A.closest(".article-toc-list, .article-mobile-toc-list");if(!E)return;const k=E.getBoundingClientRect(),T=A.getBoundingClientRect(),_=16,G=T.top<k.top+_,M=T.bottom>k.bottom-_;if(!G&&!M)return;const L=G?T.top-k.top-_:T.bottom-k.bottom+_;E.scrollTo({top:E.scrollTop+L,behavior:"smooth"})};c.forEach(A=>{A.addEventListener("click",E=>{const k=A.dataset.articleTocLink;k&&(E.preventDefault(),history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${k}`),y(k))})}),t==null||t.addEventListener("click",()=>{const A=t.getAttribute("aria-expanded")==="true";m(!A)}),document.addEventListener("keydown",A=>{A.key==="Escape"&&m(!1)}),document.addEventListener("click",A=>{!n||!A.target||n.contains(A.target)||m(!1)});const v=()=>{var j;const A=window.scrollY+Math.min(180,window.innerHeight*.28),E=o.slice().reverse().find(N=>N.getBoundingClientRect().top+window.scrollY<=A)??o[0],k=E.id,T=e.offsetTop,_=e.offsetTop+e.scrollHeight-window.innerHeight,G=_<=T?1:Math.min(1,Math.max(0,(window.scrollY-T)/(_-T))),M=`${Math.round(G*100)}%`,L=((j=E.textContent)==null?void 0:j.trim())||"Start",ae=k!==u;u=k,s.forEach(N=>{N.style.transform=`scaleX(${G})`}),r.forEach(N=>{N.textContent=M}),l.forEach(N=>{N.textContent=L}),c.forEach(N=>{const Q=N.dataset.articleTocLink===k;N.classList.toggle("is-active",Q),N.setAttribute("aria-current",Q?"true":"false"),Q&&ae&&w(N)})};window.addEventListener("scroll",v,{passive:!0}),window.addEventListener("resize",v),v()}function Yo(){const e=Array.from(document.querySelectorAll("[data-demo-category-link]")),n=e.map(c=>{var s;return(s=document.getElementById(c.dataset.demoCategoryLink??""))==null?void 0:s.closest(".demo-group")}).filter(c=>!!c);if(!e.length||!n.length)return;let t;const i=c=>{const s=c.closest(".demo-category-list");if(!s||s.scrollWidth<=s.clientWidth)return;const r=s.getBoundingClientRect(),l=c.getBoundingClientRect(),d=12,u=l.left<r.left+d,m=l.right>r.right-d;if(!u&&!m)return;const y=u?l.left-r.left-d:l.right-r.right+d;s.scrollTo({left:s.scrollLeft+y,behavior:"smooth"})},o=()=>{var d;const c=window.scrollY+Math.min(180,window.innerHeight*.28),r=(d=(n.slice().reverse().find(u=>u.getBoundingClientRect().top+window.scrollY<=c)??n[0]).querySelector("h2[id]"))==null?void 0:d.id,l=r!==t;t=r,e.forEach(u=>{const m=u.dataset.demoCategoryLink===r;u.classList.toggle("is-active",m),m?u.setAttribute("aria-current","location"):u.removeAttribute("aria-current"),m&&l&&i(u)})};e.forEach(c=>{c.addEventListener("click",s=>{const r=c.dataset.demoCategoryLink,l=r?document.getElementById(r):null;!l||!r||(s.preventDefault(),history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${r}`),l.scrollIntoView({behavior:"smooth",block:"start"}))})}),window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o),o()}function Bt(e){return[{id:"macos",title:"Mac",description:a("The native editor for your Mac. Build with AdaScript and Swift.")},{id:"windows",title:"Windows",description:a("Create Ada games on your Windows PC.")},{id:"linux",title:"Linux",description:a("Build with the open-source engine on Linux.")}].map(({id:t,title:i,description:o})=>{const c=Jn(t,e);return`<article class="platform-download" aria-labelledby="download-${t}">
      <span class="platform-symbol platform-symbol-image" aria-hidden="true" style="--platform-icon: url('${X(`images/downloads/${t}.svg`)}')"></span>
      <h2 id="download-${t}">${i}</h2><p>${o}</p>
      <div class="platform-download-actions">${c.length?c.map(s=>`<a class="header-buttons" href="${$(s.url)}">${a(yi(s))}</a>`).join(""):`<span class="download-status">${a("Installer coming soon")}</span><a class="download-source-link" href="${$(e.url)}">${a("Get the source code ↗")}</a>`}</div>
    </article>`}).join("")+`<article class="platform-download platform-download-ios" aria-labelledby="download-ios">
    <span class="platform-symbol" aria-hidden="true">▯</span>
    <h2 id="download-ios">iOS</h2><p>${a("Create and run AdaScript projects on iPad.")}</p>
    <div class="platform-download-actions"><a class="app-store-badge" href="${mn}" aria-label="${a("Download on the App Store")}"><img src="${X("images/downloads/app-store.svg")}" alt="${a("Download on the App Store")}" width="120" height="40" /></a></div>
  </article>`}function Zo(){J.innerHTML=`${ne()}
    <main class="page-shell download-page-shell"><section class="container content-restriction download-page">
      <header class="download-hero"><p class="hero-eyebrow">${a("Make something of your own")}</p>
        <h1>${a("Download Ada")}</h1><p>${a("Choose your platform. Start building.")}</p>
        <a class="download-release" data-release-link href="${ce.url}">${a("Release notes ·")} <span data-download-version>v${ce.version}</span> ↗</a>
      </header>
      <div class="download-grid" data-download-cards>${Bt(ce)}</div>
      <p class="download-footnote">${a("Ada is free and open source. Desktop downloads appear here as installers are released.")}</p>
    </section></main>${te()}`}async function Xo(){const e=await vi();document.querySelectorAll("[data-download-version]").forEach(t=>{t.textContent=`v${e.version}`}),document.querySelectorAll("[data-release-link]").forEach(t=>{t.href=e.url});const n=document.querySelector("[data-download-cards]");n&&(n.innerHTML=Bt(e))}async function Jo(){if(Be!==yn(ge))return;J.classList.remove("store-app");const e=ye(ge);if(/^\/store(\/|$)/.test(e)||(window.location.hostname.startsWith("store.")||window.location.hostname.startsWith("store-test."))&&e==="/"){const{renderStore:t}=await $n(async()=>{const{renderStore:i}=await import("./store-btPIUiaI.js");return{renderStore:i}},__vite__mapDeps([0,1]));await t(J,ne,gn,te);return}if(/^\/(cloud|games|legal)(\/|$)/.test(e)||/^cloud(?:-test)?\./.test(window.location.hostname)&&e==="/"){const{renderCloud:t}=await $n(async()=>{const{renderCloud:i}=await import("./cloud-B0ihxQqc.js");return{renderCloud:i}},__vite__mapDeps([2,3]));await t(J,ne,gn,void 0,te);return}const n=Xn(window.location.pathname,"/");if(In(po(n)),n.name==="studio"){J.innerHTML=`${ne()}${Ai(U,X)}${te()}`;return}if(n.name==="download"){Zo();return}if(n.name==="home"){jo();return}if(n.name==="blog"){$o();return}if(n.name==="demos"){_o(await Mt());return}if(n.name==="demo"){await Mo(n.slug);return}if(n.name==="static-page"){Uo(n.page);return}if(n.name==="article"){Ho(n.slug);return}Je()}function gn(){fi(xe);const e=document.querySelector(".header"),n=document.querySelector(".burger-container");if(!e||e.dataset.navigationReady==="true")return;e.dataset.navigationReady="true";let t,i;const o=c=>{if(!(!e||!n)){if(window.clearTimeout(t),window.clearTimeout(i),e.classList.toggle("menu-opened",c),document.body.classList.toggle("menu-opened",c),n.setAttribute("aria-expanded",String(c)),n.setAttribute("aria-label",a(c?"Close menu":"Open menu")),c){e.classList.remove("menu-closing"),e.classList.add("menu-opening"),t=window.setTimeout(()=>{e.classList.remove("menu-opening")},620);return}e.classList.remove("menu-opening"),e.classList.add("menu-closing"),i=window.setTimeout(()=>{e.classList.remove("menu-closing")},760)}};n==null||n.addEventListener("click",()=>{o(!(e!=null&&e.classList.contains("menu-opened")))}),document.querySelectorAll(".navigation-item-link").forEach(c=>{c.addEventListener("click",()=>{o(!1)})})}function Qo(){gn(),Kn();const e=document.querySelector(".feature-modal"),n=document.querySelector("#feature-modal-title"),t=document.querySelector("#feature-modal-description"),i=document.querySelector("#feature-modal-kicker"),o=document.querySelector("#feature-modal-visual"),c=()=>{e&&(e.hidden=!0,document.body.classList.remove("modal-opened"))};document.querySelectorAll("[data-feature-index]").forEach(s=>{s.addEventListener("click",()=>{const r=Number(s.dataset.featureIndex),l=ze[r];!l||!e||!n||!t||!i||!o||(n.textContent=l.title,t.textContent=Ao(l),i.textContent=`${a("Feature")} ${String(Number(s.dataset.featurePosition)||r+1).padStart(2,"0")}`,e.hidden=!1,document.body.classList.add("modal-opened"),o.innerHTML=nr(l),Kn())})}),document.querySelectorAll("[data-modal-close]").forEach(s=>s.addEventListener("click",c)),document.addEventListener("keydown",s=>{s.key==="Escape"&&c()}),or(),er(),ir(),sr(),Yo(),Ko(),ar(),tr()}function Kn(){document.querySelectorAll("[data-feature-preview]:not([data-preview-listeners-ready])").forEach(e=>{const n=e.querySelector(".feature-media-gif");if(!n)return;e.dataset.previewListenersReady="true";const t=()=>e.classList.add("is-loaded");n.addEventListener("load",t,{once:!0}),n.addEventListener("error",()=>e.classList.add("has-load-error"),{once:!0}),n.complete&&n.naturalWidth>0&&t()})}function er(){const e=document.querySelector("[data-hero-gif-src]"),n=e==null?void 0:e.dataset.heroGifSrc;if(!e||!n)return;const t=new Image;t.onload=()=>{var r;t.className="hero-gif",t.alt="",t.decoding="async",(r=e.querySelector(".ae-logo-header"))==null||r.replaceWith(t);const i=document.createElement("canvas");i.width=1,i.height=1;const o=i.getContext("2d",{willReadFrequently:!0});if(!o)return;let c={red:34,green:148,blue:255};const s=()=>{try{o.clearRect(0,0,1,1),o.drawImage(t,0,0,1,1);const[l,d,u,m]=o.getImageData(0,0,1,1).data;m>0&&l+d+u>8&&(c={red:Math.round(c.red*.7+l*.3),green:Math.round(c.green*.7+d*.3),blue:Math.round(c.blue*.7+u*.3)},e.style.setProperty("--hero-ambient",`${c.red} ${c.green} ${c.blue}`),e.classList.add("has-ambient-light"))}catch{}window.setTimeout(s,600)};s()},t.src=n}function nr(e){const n=e.gif?X(e.gif):"";return`
    <div class="feature-modal-media feature-media-slot" data-feature-preview>
      ${n?`<img class="feature-media-gif" src="${n}" alt="" decoding="async" />`:""}
      <span class="feature-media-loader" aria-label="${a("Loading animated feature preview")}">
        <span class="feature-media-spinner" aria-hidden="true"></span>
        <span>${a("Loading preview")}</span>
      </span>
    </div>
  `}function tr(){document.querySelectorAll("[data-article-comparison-range]").forEach(e=>{var t;const n=(t=e.closest("[data-article-comparison]"))==null?void 0:t.querySelector(".article-comparison-frame");n&&e.addEventListener("input",()=>{n.style.setProperty("--comparison-position",`${e.value}%`),e.setAttribute("aria-valuetext",`${e.value}% ${e.dataset.beforeLabel}`)})})}function ar(){const e=document.querySelector("[data-article-lightbox]"),n=e==null?void 0:e.querySelector("[data-article-lightbox-preview]"),t=e==null?void 0:e.querySelector("[data-article-lightbox-caption]"),i=e==null?void 0:e.querySelector(".article-image-lightbox-close");let o=null;if(!e||!n||!t)return;const c=()=>{e.hidden=!0,n.removeAttribute("src"),document.body.classList.remove("article-lightbox-open"),o instanceof HTMLElement&&o.focus()},s=r=>{var u,m;const l=r.closest("figure"),d=((m=(u=l==null?void 0:l.querySelector("figcaption"))==null?void 0:u.textContent)==null?void 0:m.trim())??"";o=document.activeElement,n.src=r.currentSrc||r.src,n.alt=r.alt,t.textContent=d,t.hidden=!d,e.hidden=!1,document.body.classList.add("article-lightbox-open"),i==null||i.focus()};document.querySelectorAll("[data-article-lightbox-image]").forEach(r=>{r.addEventListener("click",()=>s(r)),r.addEventListener("keydown",l=>{l.key!=="Enter"&&l.key!==" "||(l.preventDefault(),s(r))})}),e.querySelectorAll("[data-article-lightbox-close]").forEach(r=>{r.addEventListener("click",c)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!e.hidden&&c()})}function ir(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("[data-demo-fullscreen]");if(!e||!n)return;const t=document,i=e,o=document.fullscreenEnabled||t.webkitFullscreenEnabled||typeof e.requestFullscreen=="function"||typeof i.webkitRequestFullscreen=="function",c=()=>document.fullscreenElement??t.webkitFullscreenElement??null,s=()=>c()===e;let r=!1;const l=()=>{r=!0,e.classList.add("is-viewport-fullscreen"),document.body.classList.add("demo-viewport-fullscreen-open"),w()},d=()=>{r=!1,e.classList.remove("is-viewport-fullscreen"),document.body.classList.remove("demo-viewport-fullscreen-open"),w()},u=async()=>o?typeof e.requestFullscreen=="function"?(await e.requestFullscreen(),!0):typeof i.webkitRequestFullscreen=="function"?(await i.webkitRequestFullscreen(),!0):!1:!1,m=async()=>{try{if(await u())return}catch(v){console.warn("Native fullscreen is unavailable, using viewport fullscreen fallback",v)}l()},y=async()=>{var v;if(r){d();return}if(typeof document.exitFullscreen=="function"){await document.exitFullscreen();return}await((v=t.webkitExitFullscreen)==null?void 0:v.call(t))},w=()=>{const v=s()||r;e.classList.toggle("is-fullscreen",v),n.setAttribute("aria-label",a(v?"Exit demo fullscreen":"Open demo fullscreen")),n.title=a(v?"Exit fullscreen":"Open fullscreen")};n.addEventListener("click",async()=>{try{if(s()||r){await y();return}await m()}catch(v){console.error("Failed to toggle demo fullscreen",v)}}),document.addEventListener("fullscreenchange",w),document.addEventListener("webkitfullscreenchange",w),document.addEventListener("keydown",v=>{v.key==="Escape"&&r&&d()}),w()}function sr(){const e=document.querySelector(".demo-player:not(.demo-player-empty)"),n=e==null?void 0:e.querySelector("iframe");if(!e||!n)return;const t=document.createElement("canvas");t.width=1,t.height=1;const i=t.getContext("2d",{willReadFrequently:!0});if(!i)return;let o=0,c=0,s={red:34,green:211,blue:238};const r=(u,m,y)=>{s={red:Math.round(s.red*.7+u*.3),green:Math.round(s.green*.7+m*.3),blue:Math.round(s.blue*.7+y*.3)},e.style.setProperty("--demo-ambient",`${s.red} ${s.green} ${s.blue}`),e.classList.add("has-ambient-light")},l=u=>{if(u.origin!==window.location.origin)return;const m=u.data;if(!m||typeof m!="object"||m.type!=="ada-demo-ambient"||!Array.isArray(m.color)||m.color.length<3)return;const[y,w,v]=m.color.map(Number);[y,w,v].every(Number.isFinite)&&r(y,w,v)},d=()=>{var u;try{const m=(u=n.contentDocument)==null?void 0:u.querySelector("canvas");if(!m||m.width<=0||m.height<=0){c+=1,o=window.setTimeout(d,c<120?250:1e3);return}const y=Math.max(0,Math.floor(m.width*.5)),w=Math.max(0,Math.floor(m.height*.42));i.clearRect(0,0,1,1),i.drawImage(m,y,w,1,1,0,0,1,1);const[v,A,E,k]=i.getImageData(0,0,1,1).data;k>0&&v+A+E>8&&r(v,A,E),c=0,o=window.setTimeout(d,450)}catch{c+=1,o=window.setTimeout(d,c<12?450:1200)}};n.addEventListener("load",()=>{window.clearTimeout(o),c=0,o=window.setTimeout(d,500)}),window.addEventListener("message",l),o=window.setTimeout(d,500)}function or(){const e=document.querySelector(".showcase-carousel"),n=Array.from(document.querySelectorAll(".showcase-slide")),t=Array.from(document.querySelectorAll(".showcase-carousel-dot"));if(!e||n.length<2)return;let i=0,o;const c=r=>{i=(r+n.length)%n.length,n.forEach((l,d)=>{const u=d===i;l.classList.toggle("is-active",u),l.setAttribute("aria-hidden",String(!u)),l.querySelectorAll("a").forEach(m=>{m.tabIndex=u?0:-1})}),t.forEach((l,d)=>{l.classList.toggle("is-active",d===i),l.setAttribute("aria-current",d===i?"true":"false")})},s=()=>{window.clearInterval(o),o=window.setInterval(()=>{c(i+1)},5e3)};t.forEach((r,l)=>{r.addEventListener("click",()=>{c(l),s()})}),e.addEventListener("mouseenter",()=>window.clearInterval(o)),e.addEventListener("mouseleave",s),e.addEventListener("focusin",()=>window.clearInterval(o)),e.addEventListener("focusout",s),c(0),s()}Jo().catch(e=>{console.error(e),Je(a("Page failed to load"),a("Refresh the page or try again in a moment."))}).then(()=>{try{Qo()}catch(e){console.error("Failed to initialize page interactions",e)}ko(),Xo()});export{pe as a,Z as g,cr as l,rr as m,a as t,ye as w};
