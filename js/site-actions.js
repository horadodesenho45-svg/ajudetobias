(function () {
  let campaignTabContent;
  const relativeTime = new Intl.RelativeTimeFormat("pt-BR", {
    numeric: "always",
  });

  function updateSupporterTimes() {
    if (!campaignTabContent) {
      return;
    }

    campaignTabContent.querySelectorAll("time[data-relative-time]").forEach(
      function (time) {
        const timestamp = Date.parse(time.dateTime);
        if (Number.isNaN(timestamp)) {
          time.textContent = "Horário indisponível";
          console.error("Horário de apoio inválido:", time.dateTime);
          return;
        }

        const difference = timestamp - Date.now();
        const elapsed = Math.abs(difference);
        const direction = difference < 0 ? -1 : 1;
        if (elapsed < 60000) {
          time.textContent = "agora mesmo";
        } else if (elapsed < 3600000) {
          time.textContent = relativeTime.format(
            direction * Math.floor(elapsed / 60000),
            "minute"
          );
        } else if (elapsed < 86400000) {
          time.textContent = relativeTime.format(
            direction * Math.floor(elapsed / 3600000),
            "hour"
          );
        } else {
          time.textContent = relativeTime.format(
            direction * Math.floor(elapsed / 86400000),
            "day"
          );
        }
      }
    );
  }

  function initializeStaticCampaignContent() {
    const content = document.querySelector(".sc-77c3c68b-0");
    if (content) {
      content.id = "campaign-tab-content";
      campaignTabContent = content;
    }

    const navigation = document.querySelector(".sc-b725d2f2-0");
    if (navigation) {
      Array.from(navigation.children).forEach(function (tab) {
        const label = tab.textContent.trim();
        const tabName = {
          Sobre: "about",
          Atualizações: "updates",
          "Quem ajudou": "supporters",
          "Vakinha Premiada": "prizes",
          "Selos recebidos": "badges",
          "Perguntas e Respostas": "faq",
        }[label];

        if (tabName) {
          tab.dataset.staticTab = tabName;
        }
      });
    }

    const campaignInfo = document.querySelector("h1");
    const campaignSummary = campaignInfo
      && campaignInfo.closest(".sc-dhKdcB.hvkCOw");
    if (campaignSummary && !document.querySelector(".campaign-video")) {
      const videoSection = document.createElement("section");
      videoSection.className = "campaign-video";
      videoSection.setAttribute("aria-label", "Vídeo da campanha");
      videoSection.innerHTML = `
        <button type="button" class="back-to-campaign campaign-video__help">Ajude Tobias!</button>
        <div class="campaign-video__player">
          <iframe
            src="https://player.vimeo.com/video/1246487417?app_id=122963&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0"
            title="Vídeo da campanha no Vimeo"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            loading="lazy"
          ></iframe>
        </div>
        <p class="campaign-video__sound-notice">Para ouvir o vídeo, ative o som no player.</p>
      `;
      campaignSummary.after(videoSection);
    }
  }

  initializeStaticCampaignContent();
  const campaignObserver = new MutationObserver(
    initializeStaticCampaignContent
  );
  campaignObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  const shareDialog = document.createElement("dialog");
  shareDialog.className = "site-share-dialog";
  shareDialog.setAttribute("aria-labelledby", "site-share-title");
  shareDialog.innerHTML = `
    <div class="site-share-dialog__header">
      <h2 class="site-share-dialog__title" id="site-share-title">Compartilhe esta página</h2>
      <button class="site-share-dialog__close" type="button" aria-label="Fechar">&times;</button>
    </div>
    <label class="site-share-dialog__label" for="site-share-link">Link do site</label>
    <input class="site-share-dialog__link" id="site-share-link" type="text" readonly>
    <button class="site-share-dialog__copy" type="button">Copiar link</button>
    <p class="site-share-dialog__status" aria-live="polite"></p>
  `;
  document.body.append(shareDialog);

  const linkInput = shareDialog.querySelector(".site-share-dialog__link");
  const copyButton = shareDialog.querySelector(".site-share-dialog__copy");
  const status = shareDialog.querySelector(".site-share-dialog__status");

  function getSiteUrl() {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";

    if (url.pathname.endsWith("/index.html")) {
      url.pathname = url.pathname.slice(0, -"index.html".length);
    } else if (!url.pathname.endsWith("/")) {
      url.pathname += "/";
    }

    return url.href;
  }

  function fallbackCopy() {
    linkInput.focus();
    linkInput.select();
    const copied = document.execCommand("copy");
    status.textContent = copied
      ? "Link copiado!"
      : "Selecione e copie o link acima.";
  }

  async function copyLink() {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      fallbackCopy();
      return;
    }

    try {
      await navigator.clipboard.writeText(linkInput.value);
      status.textContent = "Link copiado!";
    } catch {
      fallbackCopy();
    }
  }

  shareDialog
    .querySelector(".site-share-dialog__close")
    .addEventListener("click", function () {
      shareDialog.close();
    });

  copyButton.addEventListener("click", copyLink);

  shareDialog.addEventListener("click", function (event) {
    if (event.target === shareDialog) {
      shareDialog.close();
    }
  });

  document.addEventListener(
    "click",
    function (event) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const helpButton = event.target.closest(".campaign-video__help");
      if (helpButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const goal = document.querySelector(".sc-84a1bdb1-1");
        if (goal) {
          goal.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.error("Não foi possível encontrar a área da meta.");
        }
        return;
      }

      const staticTab = event.target.closest("[data-static-tab]");
      if (staticTab && campaignTabContent) {
        event.preventDefault();
        event.stopImmediatePropagation();

        const selectedTab = staticTab.dataset.staticTab;
        const template = document.getElementById(
          `static-${selectedTab}-content`
        );
        if (!(template instanceof HTMLTemplateElement)) {
          console.error(`Não foi encontrado o conteúdo da aba: ${selectedTab}`);
          return;
        }

        Array.from(document.querySelectorAll("[data-static-tab]")).forEach(
          function (tab) {
            const isActive = tab === staticTab;
            tab.classList.toggle("hpTUvZ", isActive);
            tab.classList.toggle("fccSwh", !isActive);

            const label = tab.firstElementChild;
            if (label) {
              label.classList.toggle("bvrBZr", isActive);
              label.classList.toggle("fGoREw", !isActive);
            }
          }
        );

        campaignTabContent.replaceChildren(template.content.cloneNode(true));
        if (selectedTab === "supporters") {
          updateSupporterTimes();
        }
        return;
      }

      const button = event.target.closest("button");
      const action = button
        && button.querySelector('[data-cy="campaign-toolbar"]');

      if (!action) {
        return;
      }

      const label = action.textContent.trim();
      if (label !== "Quero Ajudar" && label !== "Compartilhar") {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();

      if (label === "Quero Ajudar") {
        const destination = new URL("queroajudar.html", window.location.href);
        const current = new URL(window.location.href);
        ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck", "fbclid", "gclid"]
          .forEach(function (key) {
            const value = current.searchParams.get(key);
            if (value) destination.searchParams.set(key, value);
          });
        window.location.assign(destination.href);
        return;
      }

      linkInput.value = getSiteUrl();
      status.textContent = "";
      shareDialog.showModal();
    },
    true
  );
  window.setInterval(updateSupporterTimes, 60000);
})();
