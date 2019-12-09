import React from "react"
import PropTypes from "prop-types"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"
import * as S from "./styles"

export default function Search({ algolia, callback }) {
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)
  return algolia && algolia.appId ? (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
  ) : (
    <nav>{callback}</nav>
  )
}

Search.propTypes = {
  algolia: PropTypes.object.isRequired,
  callback: PropTypes.node,
}
