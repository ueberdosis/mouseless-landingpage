<template>
  <Layout navigation-theme="bright">
    <app-section>
      <h1>
        Impresum
      </h1>
      <h3>
        Angaben gemäß § 5 TMG
      </h3>
      <p>
        überdosis GbR<br>
        Kurfürstenstraße 56<br>
        10785 Berlin
      </p>
      <p>
        Vertreten durch die Gesellschafter:<br>
        Sven Adlung, Patrick Baber, Nick Hirche, Philip Isik, Timo Isik, Philipp Kühn, Hans Pagel, Sebastian Schrama
      </p>
      <h3>
        Kontakt
      </h3>
      <p>
        Telefon: +49 (0)30 85 730 603<br>
        Telefax: +49 (0)30 85 730 507<br>
        E-Mail: mail@ueber.io
      </p>
    </app-section>
  </Layout>
</template>

<script>
import AppSection from '@/components/AppSection'

export default {
  components: {
    AppSection,
  },

  metaInfo: {
    title: 'Impressum',
  },
}
</script>
