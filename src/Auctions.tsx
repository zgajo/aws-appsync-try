import React from "react";
import { Query } from "react-apollo";
import { ListAuctionsQueryVariables, ListAuctionsQuery } from "./API";
import gql from "graphql-tag";
import { listAuctions } from "./graphql/queries";
import AuctionCard from "./AuctionCard";

export const Auctions = () => {
  return (
    <Query<ListAuctionsQuery, ListAuctionsQueryVariables>
      query={gql(listAuctions)}
      variables={{ limit: 5 }}
    >
      {({ data, loading }) =>
        loading ||
        !data ||
        !data.listAuctions ||
        !data.listAuctions.items ? null : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gridGap: 10
            }}
          >
            {data.listAuctions.items.map(auction => (
              <AuctionCard
                name={auction!.name}
                price={auction!.price}
                key={auction!.id}
              />
            ))}
          </div>
        )
      }
    </Query>
  );
};
