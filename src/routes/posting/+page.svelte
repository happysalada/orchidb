<script lang="ts">
  import BulletPoints from "$lib/BulletPoints.svelte";
  import SingleBulletPoint from "$lib/SingleBulletPoint.svelte";
  import Collapsable from "$lib/Collapsable.svelte";
</script>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <p
        class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        Analyste d'affaires sénior - Entreprises
      </p>
    </div>

    <p
      class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
    >
      NV-11
    </p>

    <div
      class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div class="rounded-3xl p-8 ring-1 xl:p-10 ring-gray-200">
        <h3
          id="tier-freelancer"
          class="text-lg font-semibold leading-8 text-gray-900"
        >
          Fonction
        </h3>
        <p class="mt-4 text-sm leading-6 text-gray-600">
          Conception de processus
        </p>
        <ul class="mt-4 space-y-3 text-sm leading-6 text-gray-600">
          <SingleBulletPoint point="Modéliser fonctionnalités d’affaires" />
          <SingleBulletPoint point="Identifier opportunités d’améliorations" />
          <SingleBulletPoint point="Élaborer solutions d’affaires" />

          <ul class="mt-4 ml-4 space-y-3 text-sm leading-6 text-gray-600">
            <SingleBulletPoint point="Définir besoins d’affaires" />
            <SingleBulletPoint
              point="Analyser besoins d’affaires avec parties prenantes"
            />
            <SingleBulletPoint
              point="Valider besoins d’affaires avec parties prenantes"
            />
            <SingleBulletPoint point="Analyser coûts" />
            <SingleBulletPoint point="Analyser bénéfices" />
            <SingleBulletPoint point="Analyser risques" />
            <SingleBulletPoint point="Analyser contraintes" />
          </ul>

          <SingleBulletPoint point="Recommander solution d’affaire optimale" />
        </ul>

        <p class="mt-4 text-sm leading-6 text-gray-900">Projet</p>

        <BulletPoints
          points={[
            "Exécuter en mode projet",
            "Analyser contexte d’affaire",
            "Définir objectifs",
            "Définir impacts organisationnels",
            "Élaborer stratégies d’essais",
            "Élaborer plan des essais",
            "Supporter déploiement",
            "Supporter gestion du changement",
            "Supporter l’intégration avec autres solutions",
            "Supporter la vigie de projet",
          ]}
        />
      </div>

      <div class="flex flex-col gap-y-4">
        <div class="rounded-3xl p-8 ring-1 xl:p-10 ring-gray-200">
          <h3
            id="tier-startup"
            class="text-lg font-semibold leading-8 text-gray-900"
          >
            Interpersonnel
          </h3>
          <p class="mt-4 text-sm leading-6 text-gray-600">Collaboration</p>

          <BulletPoints
            points={[
              "Collaborer transversalement à travers les fonctions",
              "Livrer résultats probants en temps opportun",
              "(Atout) Livrer avec agilité",
              "(Atout) Livrer dans l'ambiguïté",
              "(Atout) Être orienté client",
              "(Atout) Être orienté vers l’action",
            ]}
          />

          <p class="mt-4 text-sm leading-6 text-gray-600">Communication</p>

          <BulletPoints
            points={[
              "Communiquer avec parties prenantes diverses",
              "Communiquer avec parties prenantes ayant des priorités compétitrices",
            ]}
          />

          <p class="mt-4 text-sm leading-6 text-gray-600">Présentation</p>

          <BulletPoints points={["Présenter solution d’affaire optimale"]} />
        </div>

        <div class="rounded-3xl p-8 ring-1 xl:p-10 ring-gray-200 h-full">
          <h3
            id="tier-startup"
            class="text-lg font-semibold leading-8 text-gray-900"
          >
            Secteur
          </h3>
          <p class="mt-4 text-sm leading-6 text-gray-600 ">Bancaire</p>

          <BulletPoints
            points={[
              "Connaître les produits et services bancaires",
              "Connaître les fonctions bancaires",
              "Connaître la fonction bancaire d’entreprise",
            ]}
          />
        </div>
      </div>

      <div class="h-full flex flex-col gap-y-4">
        <div class="rounded-3xl p-8 ring-1 xl:p-10 ring-gray-200">
          <h3
            id="tier-startup"
            class="text-lg font-semibold leading-8 text-gray-900"
          >
            Technique
          </h3>
          <p class="mt-4 text-sm leading-6 text-gray-600">Atout</p>

          <BulletPoints points={["Interfaces API", "JIRA", "Confluence"]} />
        </div>

        <div class="rounded-3xl p-8 ring-1 xl:p-10 ring-gray-200 h-full">
          <h3
            id="tier-startup"
            class="text-lg font-semibold leading-8 text-gray-900"
          >
            Conditions
          </h3>

          <p class="mt-4 text-sm leading-6 text-gray-600">
            Experience pertinente
          </p>
          <BulletPoints points={["8 années"]} />

          <p class="mt-4 text-sm leading-6 text-gray-600">Éducation</p>
          <BulletPoints points={["Université, premier cycle, affaires"]} />

          <p class="mt-4 text-sm leading-6 text-gray-600">Langues</p>
          <BulletPoints points={["Français", "Anglais"]} />

          <p class="mt-4 text-sm leading-6 text-gray-600">Localisation</p>
          <BulletPoints points={["Montréal où", "Lévis"]} />

          <p class="mt-4 text-sm leading-6 text-gray-600">
            Mode de livraison / présentiel
          </p>
          <BulletPoints points={["Hybride / 2 jours par semaine"]} />

          <p class="mt-4 text-sm leading-6 text-gray-600">Volume horaire</p>
          <BulletPoints points={["Temps plein"]} />
        </div>
      </div>
    </div>

    <div id="accordion-collapse" data-accordion="collapse" class="mt-10">
      <Collapsable
        question="Détails sur l’entreprise"
        answer="Le Mouvement Desjardins est le plus important groupe financier coopératif au Canada et l'un des principaux employeurs au pays. Il offre toute la gamme des produits et services financiers et regroupe les expertises en gestion de patrimoine, en assurance de personnes et de dommages, en service aux entreprises de toutes tailles, en valeurs mobilières, en gestion d'actifs, en capital de risque ainsi que des modes d'accès virtuels sécuritaires, à la fine pointe de la technologie."
        rounded={true}
        bottomBorder={false}
      />
      <Collapsable
        question="Détails sur l’équipe de la position"
        answer="Dans la Direction Services bancaires et spécialisés, nous avons pour mission de mettre en place et faire évoluer les solutions supportant les services bancaires et spécialisés Entreprises incluant l’ouverture de compte omnicanal, l’accueil d’un nouveau membre ainsi que les projets en lien avec la lutte au blanchiment d’argent. Nous orientons et exécutons la mise en place des solutions et leurs évolutions en tenant compte des notions et orientations d’au-delà du bancaire et l'Open Banking. Nous soutenons la gestion du changement, l’appui au déploiement, et le soutien aux utilisateurs dans l’appropriation des nouvelles solutions. En faisant partie de notre équipe, vous contribuez à la transformation numérique de notre organisation au bénéfice de nos entrepreneurs!"
        rounded={false}
        bottomBorder={false}
      />
      <Collapsable
        question="Inclusion, diversité, équité et accessibilité"
        answer="Chez Desjardins, on croit à l’équité, à la diversité et à l’inclusion. Nous nous engageons à accueillir toutes les personnes, à les considérer et à les valoriser pour ce qu’elles sont, à nous enrichir de leurs différences et de leur unicité et, surtout, à leur offrir un environnement de travail où elles seront bien. Pour nous, la discrimination, peu importe ses formes, c’est tolérance zéro! Nous croyons en l’importance que nos équipes soient le reflet de la diversité de nos membres, de notre clientèle et des communautés que nous servons."
        rounded={false}
        bottomBorder={true}
      >
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Si vous avez besoin d’assistance pour rendre plus accessible le processus de recrutement ou le poste pour lequel vous postulez, veuillez nous en informer. Des mesures d’aménagement seront offertes aux personnes qui en font la demande à n’importe quelle étape du processus de recrutement.
        </p>
      </Collapsable>
    </div>
  </div>
</div>
