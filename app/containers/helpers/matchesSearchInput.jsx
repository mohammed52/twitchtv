import React, { Component } from 'react';

export function matchesSearchInput(searchInput, channelStatus) {


  if (!channelStatus.status.stream) {
    const tmpId = channelStatus.id;
    if (searchInput == "") return true;
    if (tmpId.match(new RegExp(searchInput, "gi"))) return true;

    return false;


  } else {

    const tmpId = channelStatus.status.stream.channel.name;
    const tmpGame = channelStatus.status.stream.channel.game;

    if (searchInput == "") return true;
    if (tmpId.match(new RegExp(searchInput, "gi"))) return true;

    if (tmpGame !== null) {
      if (tmpGame.match(new RegExp(searchInput, "gi"))) return true;
    }

    return false;
  }
}

