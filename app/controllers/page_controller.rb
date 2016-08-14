require 'open-uri'

class PageController < ApplicationController
  def index
  	check_amari_stats
  	check_derek_stats
  	@amari_stats = Amari.first
  end

private
  # Derek Carr ID = 16311
  # Amari Cooper ID = 16765
  #SCORING DETAILS PER GAME
 



  # DESIRED AMARI COOPER STATS
  # G => GAMES PLAYED
  # GS => GAMES STARTED
  # Red => RECEPTIONS
  # Yds => YARDS
  # Avg => Average Yards per Catch
  # Lng => Touchdown





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
  	binding.pry
  	current_col = 2
  	stats = []
  	while current_col < 20
  		stats.push(total_stats[current_col].text)
  		current_col += 1
  	end





  end


end

