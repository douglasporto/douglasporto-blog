import React, { useState } from "react"
import PropTypes from "prop-types"
import qs from "qs"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  Stats,
  Configure,
  Hits,
} from "react-instantsearch-dom"

import Hit from "./Hit"
import * as S from "./styles"

const urlToSearchState = ({ search }) => qs.parse(search.slice(1))

export default function Search({ algolia, callback, props }) {
  const { location } = props
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)
  const [searchState, setSearchState] = useState(urlToSearchState(location))

  const onSearchStateChange = updatedSearchState => {
    setSearchState(updatedSearchState)
  }
  return (
    <S.SearchWrapper>
      {algolia && algolia.appId ? (
        <InstantSearch
          searchClient={searchClient}
          indexName={algolia.indexName}
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}
        >
          <SearchBox translations={{ placeholder: "Pesquisar no blog..." }} />
          {searchState && searchState.query ? (
            <>
              <Stats
                translations={{
                  stats(nbHits) {
                    return `${nbHits} resultados encontrados`
                  },
                }}
              />
              <Hits hitComponent={Hit} />
            </>
          ) : (
            <nav>{callback}</nav>
          )}
        </InstantSearch>
      ) : (
        <nav>{callback}</nav>
      )}
    </S.SearchWrapper>
  )
}

Search.propTypes = {
  algolia: PropTypes.object.isRequired,
  callback: PropTypes.node,
}
