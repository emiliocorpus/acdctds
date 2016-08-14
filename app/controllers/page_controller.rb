require 'open-uri'

class PageController < ApplicationController
  def index

  	check_amari_stats




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
  	binding.pry
  	total_stats = last_tbody.css('tr').last.css('td')

  	current_col = 2
  	stats = []
  	while current_col < 16
  		stats.push(total_stats[current_col].text)
  		current_col += 1
  	end
  	binding.pry

  	

  end


end

