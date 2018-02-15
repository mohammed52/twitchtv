import React, { Component } from 'react';

export function matchesSearchInput(searchInput, channelStatus) {
  // console.log(channelStatus)
  if (channelStatus.id == "maximilian_dood") {
    console.log(channelStatus)
  }
  if (channelStatus) {

    if (!channelStatus.status.stream) {
      const tmpId = channelStatus.status.id;
      if (searchInput == "") return true;
      if (tmpId.match(new RegExp(searchInput, "gi"))) return true;


    } else {

      const tmpId = channelStatus.status.stream.channel.name;
      const tmpGame = channelStatus.status.stream.channel.game;

      if (searchInput == "") return true;
      if (tmpId.match(new RegExp(searchInput, "gi"))) return true;

      if (tmpGame !== null) {
        if (tmpGame.match(new RegExp(searchInput, "gi"))) return true;
      }

    }
  }
  return false;
}

