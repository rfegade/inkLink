import React from "react";

import ArtistCard from "../components/ArtistCard";
import StudioLayout from "../layouts/StudioLayout";
import InviteArtistButton from "../components/InviteArtistButton";

export default function ArtistsList() {
  return (
    <StudioLayout>
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <InviteArtistButton />
    </StudioLayout>
  );
}
