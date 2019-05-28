package model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

public class VerwardePersoon {
	private String fotourl;
	private String geboortedatum;
	private String adres;
	private String telefoon;
	private String verzekeringsgegevens;
	private String vertrouwenspersoon1;
	private String vertrouwenspersoon2;
	private String huisarts;
	
	public VerwardePersoon(String fotourl, String geboortedatum, String adres, String telefoon, String verzekeringsgegevens,
			String vertrouwenspersoon1, String vertrouwenspersoon2, String huisarts) {
		super();
		this.fotourl = fotourl;
		this.geboortedatum = geboortedatum;
		this.adres = adres;
		this.telefoon = telefoon;
		this.verzekeringsgegevens = verzekeringsgegevens;
		this.vertrouwenspersoon1 = vertrouwenspersoon1;
		this.vertrouwenspersoon2 = vertrouwenspersoon2;
		this.huisarts = huisarts;
	}

	public String getFotourl() {
		return fotourl;
	}

	public void setFotourl(String fotourl) {
		this.fotourl = fotourl;
	}

	public String getGeboortedatum() {
		return geboortedatum;
	}

	public void setGeboortedatum(String geboortedatum) {
		this.geboortedatum = geboortedatum;
	}

	public String getAdres() {
		return adres;
	}

	public void setAdres(String adres) {
		this.adres = adres;
	}

	public String getTelefoon() {
		return telefoon;
	}

	public void setTelefoon(String telefoon) {
		this.telefoon = telefoon;
	}

	public String getVerzekeringsgegevens() {
		return verzekeringsgegevens;
	}

	public void setVerzekeringsgegevens(String verzekeringsgegevens) {
		this.verzekeringsgegevens = verzekeringsgegevens;
	}

	public String getVertrouwenspersoon1() {
		return vertrouwenspersoon1;
	}

	public void setVertrouwenspersoon1(String vertrouwenspersoon1) {
		this.vertrouwenspersoon1 = vertrouwenspersoon1;
	}

	public String getVertrouwenspersoon2() {
		return vertrouwenspersoon2;
	}

	public void setVertrouwenspersoon2(String vertrouwenspersoon2) {
		this.vertrouwenspersoon2 = vertrouwenspersoon2;
	}

	public String getHuisarts() {
		return huisarts;
	}

	public void setHuisarts(String huisarts) {
		this.huisarts = huisarts;
	}

	@Override
	public String toString() {
		return "VerwardePersoon [fotourl=" + fotourl + ", geboortedatum=" + geboortedatum + ", adres=" + adres
				+ ", telefoon=" + telefoon + ", verzekeringsgegevens=" + verzekeringsgegevens + ", vertrouwenspersoon1="
				+ vertrouwenspersoon1 + ", vertrouwenspersoon2=" + vertrouwenspersoon2 + ", huisarts=" + huisarts + "]";
	}

}
