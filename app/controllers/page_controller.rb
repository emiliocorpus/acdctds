require 'open-uri'

class PageController < ApplicationController
  def index
  	check_amari_stats
  	check_derek_stats
  	@stats = {amari: Amari.first, derek: Derek.first}
  end

private
  # Derek Carr ID = 16311
  # Amari Cooper ID = 16765
  #SCORING DETAILS PER GAME



  def check_amari_stats
  	last_tbody = Nokogiri::HTML(open("http://www.nfl.com/player/amaricooper/2552487/gamelogs")).css('tbody').last 
  	total_stats = last_tbody.css('tr').last.css('td')
  	current_col = 2
  	stats = []
  	while current_col < 16
  		stats.push(total_stats[current_col].text)
  		current_col += 1
  	end
  	if stats[0] != Amari.first.games_played
	  	Amari.first.update(
	  		games_played: stats[0],
	  		games_started: stats[1],
	  		receptions: stats[2],
	  		receiving_yards: stats[3],
	  		average_receiving_yards: stats[4],
	  		longest_reception: stats[5],
	  		receiving_tds: stats[6],
	  		rushing_attempts: stats[7],
	  		rushing_yards: stats[8],
	  		average_rushing_yards: stats[9],
	  		longest_rush: stats[10],
	  		rushing_tds: stats[11],
	  		fumbles: stats[12],
	  		fumbles_lost: stats[13]
	  	)
  	end
  end

  def check_derek_stats
  	last_tbody = Nokogiri::HTML(open("http://www.nfl.com/player/derekcarr/2543499/gamelogs")).css('tbody').last 
  	total_stats = last_tbody.css('tr').last.css('td')
  	current_col = 2
  	stats = []
  	while current_col < 20
  		stats.push(total_stats[current_col].text)
  		current_col += 1
  	end
  	if stats[0] != Derek.first.games_played
  		Derek.first.update(
  			games_played: stats[0],
  			games_started: stats[1],
  			completed_passes: stats[2],
  			pass_attempts: stats[3],
  			completion_percentage: stats[4],
  			passing_yards: stats[5],
  			average_yards_per_pass: stats[6],
  			passing_touchdowns: stats[7],
  			interceptions: stats[8],
  			sacks: stats[9],
  			sack_yardage: stats[10],
  			passer_rating: stats[11],
  			rushing_attempts: stats[12],
  			rushing_yards: stats[13],
  			average_yards_per_rush: stats[14],
  			rushing_touchdowns: stats[15],
  			fumbles: stats[16],
  			fumbles_lost: stats[17]
  		)
  	end	

  end


end

